import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailUser() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    try {
      const [userRes, postRes, photoRes, commentRes] = await Promise.all([
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20`),
        axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=20`),
      ]);

      setUser(userRes.data);
      setPosts(postRes.data);
      setPhotos(photoRes.data);
      setComments(commentRes.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

    if (!user) return <div><p className="text-center mt-10">Loading...</p>;
        <img
            src="https://i.imgflip.com/5qf4vx.png"
            alt="Full Screen"
            className="w-full h-full object-cover"
        />
    </div>

  return (
    <div className="p-10 space-y-10">

     

     <div className="bg-blue-500 h-[50vh]">
        <div className="flex p-5">

          <img
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt="user"
            className="w-32 h-32 rounded-full  mb-4"
          />

          <h2 className="text-3xl font-bold text-blue-800">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>

          <div className="mt-6 space-y-1">
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
          </div>

        </div>


     </div>

      <div className="section-purple">
        <h3 className="text-2xl font-bold text-purple-700 mb-5 text-center  ">Albums</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <div key={post.id} className="card">
              <h4 className="font-semibold mb-2">{post.title}</h4>
              <p className="text-sm text-gray-600">
                {post.body.slice(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-purple">
        <h3 className="text-2xl font-bold text-purple-700 mb-5 text-center  ">Recent Posts</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <div key={post.id} className="card">
              <h4 className="font-semibold mb-2">{post.title}</h4>
              <p className="text-sm text-gray-600">
                {post.body.slice(0, 80)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
