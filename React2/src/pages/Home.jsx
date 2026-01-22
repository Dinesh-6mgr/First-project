

import React,{useEffect, useState} from 'react'
import axios from 'axios'
function Home() {


    const [users, setUsers] = useState([]);
    const dataHandel = async ()=>{

        const getUser = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=1')
        console.log(getUser.data)
        setUsers(getUser.data)
    }
    useEffect(()=>{
        dataHandel();
    },[])
  return (
      <div className='grid items-center justify-center gap-10 bg-gray-100 p-10 sm:grid-cols-2 lg:grid-cols-3 '>
      {
              users.map((user) => (

                
                <div className='h-fit  bg-white rounded-xl p-5 gap-5 flex flex-col hover:shadow-2xl '>
                      <div className='text-blue-500 text-2xl'>                      
                        <p> {user.name}</p>
                    </div>

                    <div className='text-sm'> 
                          <p><b>user Id:</b> {user.username}</p>
                        <p><b>Website:</b>{user.website}</p>
                          <p><i class="fa-solid fa-phone"></i>:{user.phone}</p>
                          <p><i class="fa-regular fa-envelope"></i>:{user.email}</p>
                    </div>
                      <div>    
                          <p><b><i class="fa-regular fa-address-card"></i>:Address</b></p> 
                          <p>{user.address.street},{user.address.street},{user.address.suite}</p>
                          <p> {user.address.city} - {user.address.zipcode} </p>
                    </div>
                    <div>
                        <hr />
                        <p><b>Company </b></p>
                        <p>{user.company.name}</p>
                        <p>{user.company.bs}</p>
                        <p>{user.company.catchPhrase}</p>
                        
                    </div>
                      

                </div>


            ))
      }
    </div>
  )
}

export default Home
