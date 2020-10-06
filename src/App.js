import React from "react";
import { Router } from "@reach/router";

// Components
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { User } from "./pages/User";

// Global Styles
import GlobalStyles from "./styles/GlobalStyles";

const UserLogged = ({ children }) => {
  return children({ isAuth: false });
};

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
      <UserLogged>
        {({ isAuth }) => {
          if (isAuth) {
            return (
              <Router>
                <Favs path="/favs" />
                <User path="/user" />
              </Router>
            );
          } else {
            return (
              <Router>
                <NotRegisteredUser path="/user" />
                <NotRegisteredUser path="/favs" />
              </Router>
            );
          }
        }}
      </UserLogged>
      <NavBar />
    </>
  );
};
