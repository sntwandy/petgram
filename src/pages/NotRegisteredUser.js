import React from "react";
import Context from "../Context";

// Components
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return <UserForm onSubmit={activateAuth} />;
    }}
  </Context.Consumer>
);
