import React from "react";

// Components
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map((id) => (
        <li key={id}>
          <PhotoCard />
        </li>
      ))}
    </ul>
  );
};
