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
import './App.css'; 
import logo from './dazzling.png';

function App() {
  return <Router>
    <nav>
      <Link to='/Contact' className='link'>CONTACT</Link>
      <Link to='/Shop' className='link'>SHOP</Link>
      <Link to='/'><img className="logo-img" src={logo} alt = 'Dazzling Logo'/></Link>
      <Link to='/Favorites' className='link'>FAVORITES</Link>
      <Link to='/Cart' className='link'>CART</Link>
    </nav>
    <Routes>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
  </Router>
}
export default App;
