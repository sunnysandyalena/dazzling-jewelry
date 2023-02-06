import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";

import './App.css'; 
import logo from './dazzling.png';
import contactImg from './contact-info-pink-icon.png';
import shopImg from './shop-icon.png';
import favImg from './loves-pink-icon.png';
import cartImg from './cart-pink-icon.png';
import homeImg from './home-icon.png';
import accountImg from './account.png';
import Contact from "./Components/Contact";
import Shop from "./Components/Shop";
import Favorite from "./Components/Favorites/Favorite";
import Cart from "./Components/Cart/Cart";
import Account from "./Components/Account/Account";
import Home from "./Components/Home";

function App() {
  return <Router>
    <nav>
      <div className="links">
        <Link to='/' className="link link-logo"><span className="logo">Dazzling</span><span><img className="logo-img" src={logo} alt = 'Dazzling Logo'/></span><span className="logo">Jewelry</span></Link>
      </div>
      <div className="links">
          <Link to='/' className="link link-icon">
              <img className="nav-icon" src = {homeImg} alt = 'Home Page'/>
              <p className="text-icon">HOME</p>
          </Link>
          <Link to='/Contact' className='link link-icon'>
              <img className="nav-icon" src = {contactImg} alt = 'Contact'/>
              <p className="text-icon">CONTACT</p>
          </Link>
          <Link to='/Shop' className='link link-icon'>
              <img className="nav-icon" src = {shopImg} alt = 'Shop'/>
              <p className="text-icon">SHOP</p>
          </Link>
          <Link to='/Favorite' className='link link-icon'>
              <img className="nav-icon" src = {favImg} alt = 'Favorites'/>
              <p className="text-icon">FAVORITE</p>
          </Link>
          <Link to='/Cart' className='link link-icon'>
              <img className="nav-icon" src = {cartImg} alt = 'Cart'/>
              <p className="text-icon">CART</p>
          </Link>
          <Link to='/Account' className="link link-icon">
              <img className="nav-icon" src = {accountImg} alt = 'Account'/>
              <p className="text-icon">ACCOUNT</p>
          </Link>
      </div>
    </nav>
    <Routes>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favorite' element={<Favorite/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Account' element={<Account/>}/>
    </Routes>
  </Router>
}
export default App;
