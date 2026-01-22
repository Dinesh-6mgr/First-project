import React from 'react';
import { useState } from 'react';
import friend from '../pages/friend';
import { toast, ToastContainer } from 'react-toastify';

export default function Card(props) {
   const  [friend, setFriend] = useState(true)

    function Addfriend (){
        setFriend(!friend)
        friend ? toast.success(`add friend sucessfully`,{
            autoClose:1000
        }) : toast.error(`remove friend sucessfully`,{ autoClose: 1000 })

    }
    let massage = friend ? (`add friend `) : (`remove friend `)
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', textAlign: 'center' }}>
            <img src={props.image} alt={props.name} style={{ width: '100px', borderRadius: '50%' }} />
            <p>{friend ? (`Sent frined request`):(`you are friend now`)}</p>
            <p className='text-2xl pb-2'> {props.name}</p>
            <button onClick={Addfriend} className={`rounded-sm px-2 py-1 text-white text-xl ${friend? (`bg-green-500`):(`bg-red-500`)}`}>{massage}</button>
            <ToastContainer />
        </div>
    );
}
    