import axios from 'axios';
import React, {useState, useEffect} from 'react'

function photo() {
    const [photos, setPhotos] = useState([]);
    
    const handelPhoto = async ()=>{

        const getPhoto = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        setPhotos(getPhoto.data);
        console.log(getPhoto.data)
    }

    useEffect(()=>{
        handelPhoto();
    },[])


  return (
    <div>
      <div>
            {
                  photos.map((photo) => (
                      <div key={photo.id}>
                          <img src={photo.url} alt={photo.title} />
                          <p>{photo.id}</p>
                          
                      </div>
                  ))
                  
            }


      </div>
    </div>
  )
}

export default photo
