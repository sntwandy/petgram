import { useEffect, useState, useRef } from "react";

export const useNearScreeen = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

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

  return [show, ref];
};
