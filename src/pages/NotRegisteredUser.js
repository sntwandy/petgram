import React from "react";
import Context from "../Context";

// Components
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <UserForm title="Sign Up" onSubmit={activateAuth} />
          {/* <UserForm title="Login" onSubmit={activateAuth} /> */}
        </>
      );
    }}
  </Context.Consumer>
);
