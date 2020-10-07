import React from "react";
import { useInputValue } from "../../hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <form onSubmit={onSubmit}>
      <input type="email" placeholder="example@domain.ext" {...email} />
      <input type="password" placeholder="Your password" {...password} />
      <button>Login</button>
    </form>
  );
};
