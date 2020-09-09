import React from "react";

// Components
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5, 6, 7].map((id) => (
        <li key={id}>
          <PhotoCard />
        </li>
      ))}
    </ul>
  );
};