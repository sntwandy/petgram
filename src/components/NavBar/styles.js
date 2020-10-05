import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;