import React from "react";

// Resources
const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

// Styles
import { Anchor, Image } from "./styles";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
  return (
    <>
      <Anchor href={path}>
        <Image src={cover} alt="History" />
        {emoji}
      </Anchor>
    </>
  );
};
