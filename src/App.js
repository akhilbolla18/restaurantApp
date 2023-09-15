import {useState, useEffect} from 'react'

import Header from './components/Header'
import DishItem from './components/DishItem'

import './App.css'

function App() {
  const apiUrl = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'

  const [categories, setCategories] = useState([])
  const [categoryDishes, setCategoryDishes] = useState([])
  const [activeCategory, setActiveCategory] = useState('')

  //   const [cart, setCart] = useState([])

  async function fetchData() {
    try {
      const response = await fetch(apiUrl)
      //   console.log(response)
      const data = await response.json()
      const tableMenuList = data[0].table_menu_list // dish categories
      console.log(tableMenuList)
      const filteredDishes = tableMenuList[0]?.category_dishes || [] // dishes in that category.
      console.log(filteredDishes)
      setCategories(tableMenuList)
      setCategoryDishes(filteredDishes)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getNewCategoryDishes = () => {
    const newDishes = categories.find(
      eachCategory => eachCategory.menu_category_id === activeCategory,
    )
    setCategoryDishes(newDishes?.category_dishes || [])
  }

  const onClickDishCategory = categoryId => {
    setActiveCategory(categoryId)
    getNewCategoryDishes()
  }

  //   const addToCart = dish => {
  //     setCart([...cart, dish])
  //   }

  //   const removeFromCart = dish => {
  //     const updatedCart = cart.filter(item => item.id !== dish.id)
  //     setCart(updatedCart)
  //   }

  return (
    <div className="App">
      <Header />
      <nav className="category-slider">
        <div className="slider-wrapper">
          <ul className="categories">
            {categories.map(category => (
              <button
                type="button"
                key={category.menu_category_id}
                className="category"
                onClick={() => onClickDishCategory(category.menu_category_id)}
              >
                {category.menu_category}
              </button>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <section id="dishes">
          <ul className="apps-list">
            {categoryDishes.map(dish => (
              <DishItem key={dish.dish_id} dish={dish} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
