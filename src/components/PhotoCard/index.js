import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

// Styles
import { ImgWrapper, Img, Button, Article, LikedIcon } from "./styles";

// Hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreeen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreeen();
  // get the like from localStorage [hooks]
  const key = `${id}.like`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? LikedIcon : MdFavoriteBorder;

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img detail" />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes}Likes!
          </Button>
        </>
      )}
    </Article>
  );
};
