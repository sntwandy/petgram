import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Link = styled(LinkRouter)`
  display: inline-block;
  width: 31.33%;
  position: relative;
  margin: 1%;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  &:after {
    display: block;
    content: "";
    padding-bottom: 100%;
  }
`;

export const Grid = styled.div`
  padding-top: 32px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;
