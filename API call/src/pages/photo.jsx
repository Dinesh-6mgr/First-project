import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Photo() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const handelPhoto = async () => {
        try {
            setLoading(true);
            const getPhoto = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50`);
            setPhotos(getPhoto.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handelPhoto();
    }, []);

    const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="loading-spinner mx-auto mb-4"></div>
                    <p className="text-muted">Loading photos...</p>
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
                        <h1 className="heading-xl mb-4">Photo Gallery</h1>
                        <p className="text-muted mb-8">
                            Browse through our beautiful photo collection
                        </p>

                        {/* Search */}
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search photos..."
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
                            Showing {filteredPhotos.length} of {photos.length} photos
                        </p>
                    </div>
                </div>
            </section>

            {/* Photos Grid */}
            <section className="section">
                <div className="container">
                    {filteredPhotos.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                            {filteredPhotos.map((photo) => (
                                <div key={photo.id} className='card-compact group'>
                                    
                                    {/* Photo */}
                                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                        <img
                                            src={photo.thumbnailUrl}
                                            alt={photo.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200 cursor-pointer"
                                            onClick={() => window.open(photo.url, '_blank')}
                                        />
                                    </div>
                                    
                                    {/* Photo Info */}
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 text-sm">
                                            {photo.title}
                                        </h3>
                                        <p className="text-subtle">
                                            Photo #{photo.id}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🖼️</div>
                            <h3 className="heading-md mb-2">No photos found</h3>
                            <p className="text-muted">Try adjusting your search terms</p>
                        </div>
                    )}
                </div>
            </section>

        </div>
    );
}

export default Photo;