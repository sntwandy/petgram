import React from "react";

// Components
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./container/ListOfPhotoCards";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");
  console.log(detailId);
  return (
    <>
      <GlobalStyles />
      <a href="/">
        <Logo />
      </a>
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </>
      )}
    </>
  );
};
