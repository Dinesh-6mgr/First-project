import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Nav from './component/nav'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Footer from './component/footer'
import Contact from './pages/contact'


function main() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          < Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default main


