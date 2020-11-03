import React from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { SubmitButton } from "../SubmitButton";

// Styles
import { Form, Input, Title, ImgWrap, Error, ErrorWrap } from "./styles";

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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
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
