import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


function contact() {
    const [light, setLight] = useState(true)
    const massage = light? ("Light on"): ("Light off")
    const handelLight = ()=>{
        light ? toast.success("Light is on"): toast.error("Light is off")
        setLight(!light)
    }
    
  return (
    <div className='flex h-[50vh] justify-center items-center'>
        

          <button className='bg-blue-500 rounded-sm px-3 py-2 text-xl text-white' onClick={handelLight}>{massage}</button>
<ToastContainer/>
    </div>
  )
}

export default contact
