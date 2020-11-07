import React, { useContext } from "react";
import { Contex } from "../Context";
import { SubmitButton } from "../components/SubmitButton";

export default () => {
  const { removeAuth } = useContext(Contex);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
    </>
  );
};
