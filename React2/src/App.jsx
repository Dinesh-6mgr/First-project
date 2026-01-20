import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router"
import Nav from './component/nav'
import Home from './pages/Home'
import Blog from './pages/blog'
import About from './pages/About'
import Footer from './component/footer'
import Contact from './pages/contact'
import Rendom from './pages/rendom'
import Song from './pages/song'
import Friend from './pages/friend'
import Card from './component/card'
import UserCard from './component/UserCard'
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
          < Route path='/rendom' element={<Rendom/>}/>
          < Route path='/song' element={<Song/>}/>
          < Route path='/friend' element={<Friend/>}/>
          < Route path='/card' element={<Card/>}/>
          < Route path='/userCard' element={<UserCard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default main
    

