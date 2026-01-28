import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

function albumsview() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    console.log(id)
    const handelPhoto = async () => {

        const getPhoto = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(getPhoto.data);
        console.log(getPhoto.data)
        
    }

    return (
        <div>


        </div>
    )
}

export default albumsview
