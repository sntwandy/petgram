import React, { createContext, useState } from "react";

export const Contex = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem("token", token);
    },
  };

  return <Contex.Provider value={value}>{children}</Contex.Provider>;
};

export default {
  Provider,
  Consumer: Contex.Consumer,
};
