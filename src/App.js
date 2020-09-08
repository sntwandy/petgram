import React from "react";

// Components
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

// Global Styles
import GlobalStyles from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};
