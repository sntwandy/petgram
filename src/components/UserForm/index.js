import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

// Styles
import { Form, Input, Button, Title, ImgWrap } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
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
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="email" placeholder="example@domain.ext" {...email} />
        <Input type="password" placeholder="Your password" {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  );
};
