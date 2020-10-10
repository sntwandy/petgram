import React from "react";
import Context from "../Context";
import { RegisterMutation } from "../container/RegisterMutation";

// Components
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <>
          <RegisterMutation>
            {(register) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(activateAuth);
              };
              return <UserForm title="Sign Up" onSubmit={onSubmit} />;
            }}
          </RegisterMutation>
          {/* <UserForm title="Login" onSubmit={activateAuth} /> */}
        </>
      );
    }}
  </Context.Consumer>
);
