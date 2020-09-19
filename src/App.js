import React from "react";

// Components
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./container/ListOfPhotoCards";
import { Logo } from "./components/Logo";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </>
  );
};
