import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  text-align: center;
  color: #fff;
  background-color: #8d00ff;
  border-radius: 3px;
  &[disabled] {
    opacity: 0.3;
  }
`;
