import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


function Home() {
        const [num, setNum]= useState(15);
        
    const notify    = () => toast("Wow so easy!");

    const add = ()=>{
            if(num<20){
                setNum(num + 1)

            }
            else{
                toast.error("num is greater then 20")
            }
    }
    const sub = () => {
        if(num>10){
            setNum(num - 1)

        }
        else{
            toast.error("num is less then 10")
        }
    }
    return (
        <div className="text-2xl p-5 flex gap-3 items-center items-center justify-center h-[50vh]">
            <ToastContainer />

         {num}
        <button onClick={add} className="bg-blue-500 boarder- p-1 px-2 rounded-sm text-white ">add</button>
            {num}

            <button onClick={sub} className="bg-blue-500 p-1 px-2 rounded-sm text-white">sub</button>
            {num}
           



            
            
        </div>
    );
}

export default Home;
