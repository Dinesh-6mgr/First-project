import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function friend() {
    const [friend, setFriend] = useState(false)


        function makeFriend (){
            setFriend(!friend)
            console.log("Your are friend")
           friend ? toast.success("Add friend sucessfully"): toast.error("remove friend sucessfull")
           
        }
        const massage = friend ? ("Add"): ("Remove")
    const sta = friend ?  ("Add friend"):("You Are friend now")




    return (
        <div className='h-[100vh] flex justify-center items-center pt-10'>

            <div className='bg-blue-200 h-[45%]  w-[18%] justify-center p-5  flex   flex-col gap-5 items-center rounded-sm border-r border-b'>
          <div className=''>
                    <img src="https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D 
              " alt="" className='  rounded-sm border h-[30VH] W-[30%] ' />
          </div>


                <div className="flex flex-col  justify-center items-center">

                    <p className="text-white text-xl"> {sta}  </p> 
                    <p className="text-white text-xl">DilRam</p>
                    <button className='px-2 py-1 bg-blue-600 text-white rounded-sm ' onClick={makeFriend}>{massage}</button>


                </div>
                
            </div>

           
            <ToastContainer />

        </div>
    )
}

export default friend


