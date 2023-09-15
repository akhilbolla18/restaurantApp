import './index.css'

import {BiMinus, BiPlus} from 'react-icons/bi'

const DishItem = props => {
  const {dish} = props

  return (
    <li className="dish-item" key={dish.dish_id}>
      <div className="dish">
        <div className="dotimage">ll</div>
        <div className="dish-details">
          <div className="">
            <h1 className="dish-name">{dish.dish_name}</h1>
            <p className="dish-price">
              {dish.dish_currency} {dish.dish_price}
            </p>
            <p className="dish-description">{dish.dish_description} </p>
            <div className="button-con">
              <button className="button-counter" type="button">
                <BiMinus />
              </button>
              <p className="">0</p>
              <button className="button-counter" type="button">
                <BiPlus />
              </button>
            </div>
            <p className="">available</p>
          </div>
          <p className="dish-calories">{dish.dish_calories} calories </p>
          <div className="">
            <img src={dish.dish_image} className="dish-image" alt="" />
          </div>
        </div>
      </div>
    </li>
  )
}

export default DishItem

// 0
// :
// addonCat
// :
// (3) [{…}, {…}, {…}]
// dish_Availability
// :
// true
// dish_Type
// :
// 1
// dish_calories
// :
// 610
// dish_currency
// :
// "SAR"
// dish_description
// :
// "Burger"
// dish_id
// :
// "100000026"
// dish_image
// :
// "https://i.imgur.com/7hmYZ5o.jpg"
// dish_name
// :
// "Burger"
// dish_price
// :
// 30
// nexturl
// :
// "ht
