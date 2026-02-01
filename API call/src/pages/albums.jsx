import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Albums() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const albumsHandle = async () => {
        try {
            setLoading(true);
            const getAlbums = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(getAlbums.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        albumsHandle();
    }, []);

    const filteredAlbums = albums.filter(album =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="loading-spinner mx-auto mb-4"></div>
                    <p className="text-muted">Loading albums...</p>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            
            {/* Header */}
            <section className="bg-white border-b border-gray-200">
                <div className="container py-8">
                    <div className="text-center mb-8">
                        <h1 className="heading-xl mb-4">Photo Albums</h1>
                        <p className="text-muted mb-8">
                            Explore beautiful photo collections from our community
                        </p>

                        {/* Search */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search albums..."
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
                            Showing {filteredAlbums.length} of {albums.length} albums
                        </p>
                    </div>
                </div>
            </section>

            {/* Albums Grid */}
            <section className="section">
                <div className="container">
                    {filteredAlbums.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                            {filteredAlbums.map((album) => (
                                <div key={album.id} className='card-compact group'>
                                    
                                    {/* Album Cover */}
                                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                        <img
                                            src={`https://picsum.photos/200/200?random=${album.id}`}
                                            alt="Album cover"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                        />
                                    </div>
                                    
                                    {/* Album Info */}
                                    <div className="mb-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {album.title}
                                        </h3>
                                        <p className="text-subtle">
                                            By User {album.userId}
                                        </p>
                                    </div>

                                    {/* View Button */}
                                    <Link 
                                        to={`/albumsview/${album.id}`}
                                        className="btn-ghost w-full"
                                    >
                                        View Photos
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📸</div>
                            <h3 className="heading-md mb-2">No albums found</h3>
                            <p className="text-muted">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
}

export default Albums;