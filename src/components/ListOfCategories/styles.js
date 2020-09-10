import styled, { css } from "styled-components";
import { fadeInView } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      ${fadeInView(0.5)}
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0px 8px;
`;
