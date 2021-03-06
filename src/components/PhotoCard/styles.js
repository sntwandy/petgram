import styled from "styled-components";
import { fadeIn } from "../../styles/animation";
import { MdFavorite } from "react-icons/md";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  display: block;
  border-radius: 10px;
  height: 0px;
  overflow: hidden;
  padding: 56.25% 0px 0px 0px;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0px;
`;
