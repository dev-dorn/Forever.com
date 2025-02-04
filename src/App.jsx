import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Collection from './pages/collection'
import Contact from './pages/contact'
import About from './pages/about'
import PlaceOrder from './pages/placeorder'
import Orders from './pages/orders'
import Product from './pages/product'
import Cart from './pages/cart'
import Navbar from './components/navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        {/* Add all your routes here */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

