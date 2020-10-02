import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import { fadeIn } from "../../styles/animation";

export const LikedIcon = styled(MdFavorite)`
  color: #eb1a00;
  ${fadeIn({ time: "0.5", type: "ease-in" })}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;
