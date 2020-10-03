import React from "react";
import { Router } from "@reach/router";

// Components
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Logo } from "./components/Logo";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      )
    </>
  );
};
