import React from "react";

// Styles
import { ImgWrapper, Img, Article } from "./styles";

// Components
import { FavButton } from "../FavButton";

// Container
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

// Hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreeen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const [show, ref] = useNearScreeen();
  // get the like from localStorage [hooks]
  const key = `${id}.like`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img detail" />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                setLiked(!liked);
              };
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};
