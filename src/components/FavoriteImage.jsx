import { useContext } from "react";
import { PhotosContext } from "../assets/context/PhotosContext";
import IconHeart from "./IconHeart";

const FavoriteImage = () => {
  const { photos, setPhotos } = useContext(PhotosContext);
  const removeFavorite = (id) => {
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

  const photoLiked = photos.filter((filters) => filters.isFavorite === true);
  return (
    <div className="gallery grid-columns-5 p-3">
      {photoLiked.map((photo, i) => (
        <div
          key={i}
          onClick={() => removeFavorite(photo.id)}
          className="photo"
          style={{ background: `url(${photo.src.large})` }}
        >
          <IconHeart filled={photo.isFavorite} />
          <section>
            <h6>{photo.alt}</h6>
          </section>
        </div>
      ))}
    </div>
  );
};
export default FavoriteImage;
