import React, { useContext } from "react";
import { Contex } from "../Context";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";

// Components
import { UserForm } from "../components/UserForm";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Contex);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { singup } = data;
              activateAuth(singup);
            });
          };
          const errorMsg =
            error &&
            "The user is already registered or there are other problem.";
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Sign Up"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };
          const errorMsg =
            error &&
            "The email or password are wrong or you are not registered.";
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Sign In"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
