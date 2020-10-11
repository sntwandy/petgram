import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

// Styles
import {
  Form,
  Input,
  Button,
  Title,
  ImgWrap,
  Error,
  ErrorWrap,
} from "./styles";

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <ImgWrap>
        <img src="https://i.imgur.com/Qqcvq1A.png" alt="Pets" />
      </ImgWrap>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          type="email"
          placeholder="example@domain.ext"
          {...email}
        />
        <Input
          disabled={disabled}
          type="password"
          placeholder="Your password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
        {error && (
          <ErrorWrap>
            <img src="https://i.imgur.com/gmDhrEA.png" alt="Error" />
            <Error>{error}</Error>
          </ErrorWrap>
        )}
      </Form>
    </>
  );
};
