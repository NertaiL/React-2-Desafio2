import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PhotosContext = createContext();
const PHOTO_URL = "/photos.json";

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  /* me sale mas comodo con promesas , par ami gusto se ve mas legible y menos codigo*/
  const getPhotos = () => {
    axios
      .get(PHOTO_URL)
      .then((response) => {
        const { photos: photosDB } = response.data;
        setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false }))); 
      })
      .catch((error) => {
        console.error("You did not obtain the requested data", error);
      });
  };

  /* con axios try catch */

  // const getPhotos = async () => {
  //   try {
  //     const response = await axios.get(PHOTO_URL)
  //     if(!response.status){                        //el !response.status es por si no tiene respuesta de lo consultada a la api es un codigo 200 tambien podria ser asi if(responte.status !== 200)
  //       throw new Error("You didn't get the data")
  //     }
  //     const {photos : photosDB} = response.data 
  //     setPhotos(photosDB.map((photo)=> ({
  //       ...photo, isFavorite : false  //aqui podria aver ocupado liked pero prefiero agregarle la propiedad ,yaque no en todas las api nos traera una prpopiedad con un booleano
  //     })))

  //   } catch (error) {
  //     console.error(error.message);
  //   }

  // }

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <PhotosContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};

export default PhotosProvider;
