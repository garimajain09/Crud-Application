
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import './App.css'
import Footer from './components/Footer'
import Signup from './components/signup'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/login'
import AddProduct from './components/addProduct'
import Productlist from './components/productlist'
import UpdateProduct from './components/UpdateProduct'
import Profile from './components/Profile'
import About from './components/About';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>


          <Route element={<PrivateComponent />} >
            <Route path="/myproduct" element={<Productlist />}></Route>
            <Route path="/add" element={<AddProduct />}></Route>
            <Route path="/update/:id" element={<UpdateProduct/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Profile/>}></Route>
          </Route>

          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>


        <Footer />


      </BrowserRouter>

    </div>
  )
}

export default App
