import React from 'react'   


function header() {
  return (
    <div className='flex  justify-around items-center bg-blue-500 text-white p-5  text-sm'>
        <div>
            <img src="" alt="LOGO" />
        </div>
        <div className='flex gap-10'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        </div>

    </div>
  )
}

export default header
