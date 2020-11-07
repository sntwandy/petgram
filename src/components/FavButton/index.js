import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import PropTypes from "prop-types";

// Styles
import { LikedIcon, Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? LikedIcon : MdFavoriteBorder;
  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes}Likes!
    </Button>
  );
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
