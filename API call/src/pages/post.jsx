import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Post() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const handlePosts = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handlePosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="loading-spinner mx-auto mb-4"></div>
                    <p className="text-muted">Loading posts...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="container py-8">
                    <div className="text-center mb-8">
                        <h1 className="heading-xl mb-4">All Posts</h1>
                        <p className="text-muted mb-8">
                            Discover engaging content from our community
                        </p>

                        {/* Search */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="text-center">
                        <p className="text-subtle">
                            Showing {filteredPosts.length} of {posts.length} posts
                        </p>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="section">
                <div className="container">
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="post-card">
                                    <img
                                        src={`https://picsum.photos/300/200?random=${post.id}`}
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
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="heading-md mb-2">No posts found</h3>
                            <p className="text-muted">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
}

export default Post;