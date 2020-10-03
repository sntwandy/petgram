import React from "react";

// Components
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCardsWithQuery } from "../container/ListOfPhotoCardsWithQuery";

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsWithQuery categoryId={id} />
    </>
  );
};
