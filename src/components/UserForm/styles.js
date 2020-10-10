import styled from "styled-components";

export const Form = styled.form`
  padding: 16px 10px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  padding: 8px 4px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 32px;
  text-align: center;
  color: #fff;
  background-color: #8d00ff;
  border-radius: 3px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 0px;
  margin-left: 7px;
`;

export const ImgWrap = styled.div`
  width: 50%;
  margin: auto;
  & > img {
    width: 100%;
  }
`;
