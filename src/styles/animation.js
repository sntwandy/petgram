import { css, keyframes } from "styled-components";

const fadeInKeyframes = keyframes`
  from  {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0px);
    opacity: 1;
  }
`;

const fadeInViewport = keyframes`
  from {
    transform: translateY(-500px)
  }
  to {
    transform: translateY(15)
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const fadeInView = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInViewport} ${type};
  `;
