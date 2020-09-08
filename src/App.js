import React from "react";

// Components
import { ListOfCategories } from "./components/ListOfCategories";

// Global Styles
import GlobalStyles from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategories />
    </>
  );
};
