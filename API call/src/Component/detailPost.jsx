import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [users, setusers] = useState();


    const fetchPost = async () => {
        try {
            const getPost = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

            const userId = getPost.data.userId;

            const getuser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            console.log('user ', getuser.data.name);
            setusers(getuser.data)
            setPost(getPost.data);
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    };
    const fetchuser = async () => {
        try {
            const getuser = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            setusers(getuser)
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    };

    const fetchComments = async () => {
        try {
            const getComments = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            setComments(getComments.data);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };


    useEffect(() => {
        fetchPost();
        fetchComments();
        fetchuser()
    }, [id]);



    if (!post) return <div className="w-screen h-screen overflow-hidden">
        <p className="text-center">LOading.........</p>
        <img
            src="https://i.imgflip.com/5qf4vx.png"
            alt="Full Screen"
            className="w-full h-full object-cover"
        />
    </div>;

    return (
        <div className='bg-gray-100 min-h-[80vh] p-10'>
            <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="post" className='w-full h-48 object-cover rounded mb-3'
            />
            <h1 className='text-3xl font-bold mb-5'>{post.title}</h1>
            <p className='mb-5'>{post.body}</p>

            <p className=' text-blue-500 text-right  '>Arthur:{users.name }</p>
            

            <h1 className='text-xl text-blue-500 pt-5 mb-5 text-center font-bold'>Comments</h1>

            {
                comments.map((c) => (
                    <div key={c.id} className='bg-white p-4 rounded shadow mb-3'>
                        <a href={`/users/${c.id}`}>
                            <p className='font-semibold text-blue-600'>{c.name} </p>
                        </a>                        
                        <p className='text-sm text-gray-500 text-sm'>({c.email})</p>
                        <p>{c.body}</p>
                        <Link>{ }</Link>
                    </div>
                )
                )}
        </div>
    );
}

export default PostDetail;
