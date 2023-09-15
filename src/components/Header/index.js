import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <header className="header" id="header">
    <h1 className="Restaurant-name">UNI Resto Cafe</h1>
    <AiOutlineShoppingCart className="cart-icon" />
    {/* <div id="cart-icon">Cart ({cart.length})</div> */}
  </header>
)

export default Header
