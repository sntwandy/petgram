import React, { useEffect, useRef, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

// Styles
import { ImgWrapper, Img, Button, Article, LikedIcon } from "./styles";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  // get the like from localStorage
  const key = `${id}.like`;
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key);
      return JSON.parse(like);
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    // Intersection observer, support to all browsers
    Promise.resolve(
      // If the browser has the type IntersectionObserver return window, if not, import
      typeof window.IntersectionObserver !== undefined
        ? window.IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      // Return the promise with window or import to resolve
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    });
  }, [ref]);

  const Icon = liked ? LikedIcon : MdFavoriteBorder;

  // Save like to LocalStorage
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value);
      setLiked(value);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="img detail" />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size="32px" />
            {likes}Likes!
          </Button>
        </>
      )}
    </Article>
  );
};
