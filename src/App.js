import './App.css';
import {useEffect , useState} from 'react';
import Photo from './Photo';

function App() {

  const mainUrl='https://api.unsplash.com/photos/';
  //'https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY';
  const [photos , setPhotos] = useState([]);

  const fetchImages = async ()=>{
    try {
      let url = `${mainUrl}/?client_id=_KJ2j8jFLs8IHA5Mry2kx-_DmJmA27aKzx5b2ALaCj8`;
      const resp= await fetch(url);
      const data = await resp.json();
      console.log(data);
      setPhotos(data);
    } catch (error) {
      
    }
  }

useEffect(() => {
   fetchImages();
  return () => {
    //cleanup
  }
}, []);

 return (
  <div className='photos-center'>
    {photos.map( (image)=>{  
              return <Photo key= {image.id} {...image}/> ;
            } ) 
          }
  </div>
 )
        

      
  
 
}

export default App;
