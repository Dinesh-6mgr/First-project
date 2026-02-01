import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { preinit } from 'react-dom';

function albumsview() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    
    console.log(albumId)
    const handelPhoto = async () => {

        const getPhoto = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(getPhoto.data);
        console.log(getPhoto.data)
        const userPhoto = albumId ? photos.filter(photo => photo.id === albumId) : photos;
        setPhotos(userPhoto);
        console.log(photos)
    }

    return (
        <div>

        </div>
    )
}

export default albumsview
