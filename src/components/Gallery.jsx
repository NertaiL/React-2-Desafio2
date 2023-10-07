import { useContext } from "react";
import { PhotosContext } from "../context/PhotosContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);
  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };
  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          onClick={() => addFavorite(photo.id)}
          className="photo"
          style={{
            background: `url(${photo.src.medium})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {" "}
          {/* aqui mas que nada deje la imagen de fondo para poder escribir encima de la imagen, yaque de otra forma me quedaria como una card normal, osea foto abajo comentario etc. */}
          <IconHeart filled={photo.isFavorite} />{" "}
          {/* aqui le digo que si es false me deje el corazon en blanco  */}
          <section>
            <h6>{photo.alt}</h6>
          </section>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
