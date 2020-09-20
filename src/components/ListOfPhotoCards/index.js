import React from "react";

// Components
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  // console.log(photos);
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
