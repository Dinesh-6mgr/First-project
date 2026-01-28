import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Albums() {
    const [albums, setAlbums] = useState([]);

    const albumsHandle = async () => {
        try {
            const getAlbums = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(getAlbums.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        albumsHandle();
    }, []);

    return (
        <div className='p-5 bg-gray-300'>
            <h2 className='text-2xl font-bold mb-5'>Albums</h2>
            <div >
                <div className='p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 justify-items-center'>
                    {albums.map((album) => (

                        <div key={album.id} className='bg-white shadow-sm  rounded-sm px-2 py-3 gap-5 w-[100%]  '>
                            <p className='pb-5'>
                                {album.title}
                            </p>
                            <div className='text-white px-5 py-1 bg-blue-500 rounded-sm hover:bg-blue-700  '>
                                <Link to={`/albumsview/${album.id}`}>View photo</Link>

                            </div>
                        </div>






                    ))}
                </div>
            </div>
        </div>
    );
}

export default Albums;
