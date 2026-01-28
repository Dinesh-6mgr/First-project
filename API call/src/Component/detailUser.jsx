import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DetailUser() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts]= useState([]);
    const [photos, setPhotos] = useState([]);
    const [comments,setComments] = useState([]);
    const { id } = useParams(); 

    const dataHandel = async () => {
        try {
            const getUser = await axios.get('https://jsonplaceholder.typicode.com/users');
            const getpost = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=15')
            const getPhoto = await axios.get('https://jsonplaceholder.typicode.com/photos')
            const getComment = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setPhotos(getPhoto.data)
            setUsers(getUser.data);
            setPosts(getpost.data);
            setComments(getComment.data);
            console.log(comments)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dataHandel();
    }, []);
   
    const n = parseInt(id) - 1;
    const userId = users[n]?.id;
    
    const userPosts = userId ? posts.filter((post) => post.id === userId) : [];
    const userPhotos = userId ? photos.filter((photo) => photo.id === userId) : [];
    const userComment = userId ? comments.filter((comment) => comment.id === userId) : [];


    return (
        <div className='bg-gray-100 min-h-screen   items-start p-10'>
           <div className='flex items-center justify-center pb-10'>
                <div className='bg-white w-full max-w-sm p-5 rounded-xl shadow-md hover:shadow-xl'>
                    <h3 className='text-2xl text-blue-700 pb-3 text-center '><b>{users[n]?.name}</b></h3>

                    <div>
                        <div>
                            <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2dldHR5aW1hZ2VzLTIxNjQxOTMzNDkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=" alt="" className=' rounded-xl' />
                            <div>
                                <p><b>Username:</b> {users[n]?.username}</p>
                                <p><b>Email:</b> {users[n]?.email}</p>
                                <p><b>Phone:</b> {users[n]?.phone}</p>
                                <p><b>Website:</b> {users[n]?.website}</p>
                            </div>
                        </div>

                        <div>
                            <div className='pt-5'>
                                <h4 className='font-semibold'>Address</h4>
                                <p>{users[n]?.address?.street}, {users[n]?.address?.suite}</p>
                                <p>{users[n]?.address?.city} - {users[n]?.address?.zipcode}</p>
                                <p>Lat: {users[n]?.address?.geo?.lat}, Lng: {users[n]?.address?.geo?.lng}</p>
                            </div>

                            <div className='pt-5'>
                                <h4 className='font-semibold'>Company</h4>
                                <p><b>Name:</b> {users[n]?.company?.name}</p>
                                <p><b>Catch Phrase:</b> {users[n]?.company?.catchPhrase}</p>
                                <p><b>BS:</b> {users[n]?.company?.bs}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                </div>
                
           </div>
            <div className='pt-5 text-xl flex justify-center gap-20  '>
                <div className='pt-5 text-xl bg-white rounded-sm w-fit px-5  py-2 shadow-sm  '>
                 <h4 className='font-semibold text-blue-500'>Posts</h4>
                <p><b>Total Posts:</b> {userPosts.length}</p>
            </div>
                <div className='pt-5 text-xl bg-white rounded-sm w-fit px-5  py-2 shadow-sm  '>
                 <h4 className='font-semibold text-blue-500'>Photo</h4>
                <p><b>Total Photo:</b> {userPhotos.length}</p>
            </div>
                    <div className='pt-5 text-xl bg-white rounded-sm w-fit px-5  py-2 shadow-sm  '>
                    <h4 className='font-semibold text-blue-500'>Comment</h4>
                    <p><b>Total Comment:</b> {userComment.length}</p>
                </div>
            
            </div>
        </div>
    );
}

export default DetailUser;
