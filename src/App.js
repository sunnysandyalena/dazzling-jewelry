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
      <div>
        <Link to='/' className="link"><span className="logo">Dazzling</span><span><img className="logo-img" src={logo} alt = 'Dazzling Logo'/></span><span className="logo">Jewelry</span></Link>
      </div>
      <div>
        <Link to='/' className="link"><img className="navIcon" src = {homeImg} alt = 'Home Page'/></Link>
        <Link to='/Contact' className='link'><img className="navIcon" src = {contactImg} alt = 'Contact'/></Link>
        <Link to='/Shop' className='link'><img className="navIcon" src = {shopImg} alt = 'Shop'/></Link>
        <Link to='/Favorites' className='link'><img className="navIcon" src = {favImg} alt = 'Favorites'/></Link>
        <Link to='/Cart' className='link'><img className="navIcon" src = {cartImg} alt = 'Cart'/></Link>
        <Link to='/Account' className="link"><img className="navIcon" src = {accountImg} alt = 'Account'/></Link>
      </div>
    </nav>
    <Routes>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='./Account' element={<Account/>}/>
    </Routes>
  </Router>
}
export default App;
