import React from "react";
import { Router } from "@reach/router";

// Components
import { Home } from "./pages/Home";
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
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </>
  );
};
