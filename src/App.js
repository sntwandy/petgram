import React, { useContext, Suspense, lazy } from "react";
import { Redirect, Router } from "@reach/router";
import { Contex } from "./Context";

// Components
// import { Home } from "./pages/Home";
// import { Detail } from "./pages/Detail";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
// import { Favs } from "./pages/Favs";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
// import { User } from "./pages/User";
// import { NotFound } from "./pages/NotFound";

// Implement react lazy
const Home = lazy(() => import("./pages/Home"));
const Favs = lazy(() => import("./pages/Favs"));
const Detail = lazy(() => import("./pages/Detail"));
const User = lazy(() => import("./pages/User"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

export const App = () => {
  const { isAuth } = useContext(Contex);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
        <NotFound default />
      </Router>
      <NavBar />
    </Suspense>
  );
};
