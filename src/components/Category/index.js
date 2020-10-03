import React from "react";

// Resources
const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg";

// Styles
import { Link, Image } from "./styles";

export const Category = ({ cover, path, emoji = "?" }) => {
  return (
    <>
      <Link to={path}>
        <Image src={cover} alt="History" />
        {emoji}
      </Link>
    </>
  );
};
