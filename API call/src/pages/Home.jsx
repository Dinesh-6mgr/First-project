import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const displayUsers = users.slice(0, 4);
  const displayPosts = posts.slice(0, 6);

  const handleFetch = async () => {
    try {
      setLoading(true);
      const [postRes, userRes] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=15"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ]);

      setPosts(postRes.data);
      setUsers(userRes.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-muted">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6">
              Welcome to JungleBook
            </h1>
            <p className="text-xl text-muted mb-8 leading-relaxed">
              A clean, modern platform to discover amazing posts, connect with people, 
              and explore beautiful content from our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/post" className="btn-primary">
                Browse Posts
              </Link>
              <Link to="/user" className="btn-secondary">
                Meet People
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <div className="stat-card">
              <div className="stat-number">{posts.length}</div>
              <div className="stat-label">Posts</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">{users.length}</div>
              <div className="stat-label">Users</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Albums</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Photos</div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Users */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Featured Users</h2>
            <p className="text-muted">Meet some of our amazing community members</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {displayUsers.map((user) => (
              <div key={user.id} className="user-card">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=f3f4f6&color=374151&size=64`}
                  alt={user.name}
                  className="user-avatar"
                />
                
                <h3 className="user-name">{user.name}</h3>
                <p className="user-username">@{user.username}</p>
                
                <div className="user-info">
                  <div className="user-info-item">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="truncate">{user.email}</span>
                  </div>
                  
                  <div className="user-info-item">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                    <span className="text-blue-600">{user.website}</span>
                  </div>
                </div>

                <Link
                  to={`/users/${user.id}`}
                  className="btn-ghost mt-4 w-full"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/user" className="btn-secondary">
              View All Users
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Latest Posts</h2>
            <p className="text-muted">Discover engaging content from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {displayPosts.map((post) => (
              <article key={post.id} className="post-card">
                <img
                  src={`https://picsum.photos/400/200?random=${post.id}`}
                  alt="Post cover"
                  className="post-image"
                />

                <div className="post-content">
                  <Link to={`/posts/${post.id}`}>
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.body}</p>
                  </Link>
                  
                  <div className="post-meta">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://ui-avatars.com/api/?name=User${post.userId}&background=f3f4f6&color=374151&size=24`}
                        alt="Author"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-subtle">User {post.userId}</span>
                    </div>
                    <Link 
                      to={`/posts/${post.id}`}
                      className="text-sm font-medium text-gray-900 hover:text-gray-700"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link to="/post" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;