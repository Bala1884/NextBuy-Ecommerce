import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='pl-20 pr-20'>
        <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar/>
      <SearchBar/>
      <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='collections' element={<Collections/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='place-order' element={<PlaceOrder/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product/:productID' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App