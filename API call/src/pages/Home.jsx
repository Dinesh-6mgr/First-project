import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {

  const [posts, setPosts] = useState([]);
  const [users, setusers] = useState([]);
  const displayUser = users.slice(0, 5);
  const displayPost = posts.slice(0, 5);
  console.log("display:", displayUser)
  const handel = async () => {

    const getPost = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=15`);
    const getuser = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(getPost.data)
    setPosts(getPost.data)
    setusers(getuser.data)


  }
  useEffect(() => {
    handel()
  }, [])
  return (
    <div className='bg-gray-100  p-10'>
      <h1 className='text-3xl font-bold text-blue-700 mb-5'>Homepage</h1>
      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem accusamus at.
        Asperiores porro similique praesentium delectus, molestias, sit, explicabo iusto quam fugit non nihil
        illum unde aut minima corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, cumque! Esse animi rem expedita aspernatur fuga recusandae reiciendis sunt architecto natus alias excepturi, ad magnam et eum commodi optio rerum!
      </p>


      <div>

        <div className='pt-10 flex justify-center items-center gap-20'>
          <div className='bg-white px-5 py-2 rounded-xl shadow-xl w-fit text-3xl text-center'>
            <p className='text-blue-500'><b>          Total post</b></p>
            <p>{posts.length}</p>
          </div>

          <div className='bg-white px-5 py-2 rounded-xl shadow-xl w-fit text-3xl text-center'>
            <p className='text-blue-500'><b>          Total User</b></p>
            <p>{users.length}</p>
          </div>

        </div>
        <div>

          {/* Displayuser */}
          <h1 className='text-3xl font-bold text-blue-700 mb-5'>Users</h1>

          <div className='bg-gray-100 '>
            <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center'>
              {displayUser.map((user) => (
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
          <div className='flex items-center justify-center pb-2'>


            {/* See Button */}
            <Link to={'/user'} className='text-white px-5 py-2 bg-blue-500 rounded-sm hover:bg-blue-700  '>All Users</Link>
          </div>


          {/* view all post */}

          <div className='bg-gray-300 min-h-screen p-10'>
            <h1 className='text-3xl font-bold text-blue-600 rounded-sm mb-5 text-center'>Posts</h1>

           <div className='flex gap-5'>
              {displayPost.map((post) => (
                <div key={post.id} className='bg-white p-5 rounded-lg shadow  w-[50%]'>
                  <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="post" className='w-full h-48 object-cover rounded mb-3'
                  />

                  <Link
                    to={`/posts/${post.id}`}
                  >
                    <h2 className='text-xl font-semibold'>{post.title}</h2>
                    <p>{post.body.slice(0, 60)}</p>
                    See More...
                  </Link>                      </div>
              ))
              }
           </div>
            <div className='flex items-center justify-center pt-5'>
              <Link to={'/post'} className='text-white px-5 py-2 bg-blue-500 rounded-sm hover:bg-blue-700  '>All Post</Link>

            </div>
          </div>

         





        </div>


      </div>
    </div>
  )
}

export default Home
