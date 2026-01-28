import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


function post() {
    const [posts, setPosts] = useState([]);


        const postHandel= async ()=>{
            const getpost = await axios.get('https://jsonplaceholder.typicode.com/posts')
            
            setPosts(getpost.data);
            console.log(getpost.data)
        }
               useEffect(()=>{
                postHandel();
               },[]) 
  return (
    <div>
        
          <div className='bg-gray-100 min-h-screen p-10'>
              <h1 className='text-3xl font-bold text-blue-700 mb-5'>Posts</h1>

              {posts.map((post) => (
                  <div key={post.id} className='bg-white p-5 rounded-lg shadow mb-5'>
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
        

      

    </div>
  )
}

export default post
