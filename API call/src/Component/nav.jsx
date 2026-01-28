import React from 'react'
import {  } from 'react-router-dom'

function nav() {
  return (
    <div className='flex flex-1 justify-around p-5  text-salet-500 text-sm  shadow-xl'>
      <div >
        <a href="/" className='flex justify-center items-center'>    
              
            <img alt="JungleBook" src='https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80' 
        className='h-[10vh]'/>
        <span className=''>JungleBooK</span>

</a>
      </div>
      <div className='flex justify-around items-center gap-20'>
      <a href="/">HOME</a> 
      <a href="/post">POST</a>
      <a href="/user">USER</a>
        <a href="/albums">Albums </a>
      <a href="/photo">Photo</a>

      </div>
    </div>
  )
}

export default nav
