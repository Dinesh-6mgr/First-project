import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from './Component/nav'
import Footer from './Component/footer'
import './App.css'
import Home from './pages/Home'
import User from './pages/user'
import Post from './pages/post'
import PostDetail from './Component/detailPost'
import DetailUser from './Component/detailUser'
import Albums from './pages/albums'
import Photo from './pages/photo'
import Albumsview from './Component/albumsview'
function App() {

  return (
    <>
      <BrowserRouter>
      <Nav />
    <Routes>
      <Route path='/'  element= {<Home/>}/>
      <Route path='/user'  element= {<User/>}/>
      <Route path='/post'  element= {<Post/>}/>
      <Route path='/posts/:id'  element= {<PostDetail/>}/>
      <Route path='/users/:id'  element= {<DetailUser/>}/>
      <Route path='/albums'  element= {<Albums/>}/>
      <Route path='/photo'  element= {<Photo/>}/>
      <Route path='/albumsview/:id'  element= {<Albumsview/>}/>
    </Routes>
      <Footer />
      </BrowserRouter>
        
    </>
  )
}

export default App
