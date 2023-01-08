import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link 
} from "react-router-dom";
import Contact from './Contact';
import Shop from './Shop';
import Home from './Home';
import Favorites from './Favorites';
import Cart from './Cart';
import Account from "./Account";
import './App.css'; 
import logo from './dazzling.png';
import contactImg from './contact-info-pink-icon.png';
import shopImg from './shop-icon.png';
import favImg from './loves-pink-icon.png';
import cartImg from './cart-pink-icon.png';
import homeImg from './home-icon.png';
import accountImg from './account.png';

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
          <Link to='/Favorites' className='link link-icon'>
              <img className="nav-icon" src = {favImg} alt = 'Favorites'/>
              <p className="text-icon">FAVORITES</p>
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
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Account' element={<Account/>}/>
    </Routes>
  </Router>
}
export default App;
