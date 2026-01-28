import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function User() {  

    const [users, setUsers] = useState([])

    const dataHandel = async () => {
        try {
            const getUser = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(getUser.data)
            setUsers(getUser.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dataHandel()
    }, [])

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {users.map((user) => (
                    <div key={user.id} className='bg-white w-full max-w-sm p-5 rounded-xl shadow-md hover:shadow-xl'>

                        <h3 className='text-2xl text-blue-700 pb-3'>{user.name}</h3>

                        <div>
                            <p><b>Username:</b> {user.username}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                            <p><b>Website:</b> {user.website}</p>
                        </div>

                        <Link
                            to={`/users/${user.id}`}
                            className='text-blue-500 hover:underline mt-3 inline-block'
                        >
                            View profile
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default User
