import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from '../Components/Header'
import About from '../Pages/About'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Menu from '../Pages/Menu'
import Register from '../Pages/Register'
const Navbar = () => {
  return (
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/menu' element={<Cart/>}/>
              
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Navbar