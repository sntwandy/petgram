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
  &[disabled] {
    opacity: 0.3;
  }
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

export const Error = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  color: red;
  margin-left: 5px;
`;

export const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  & > img {
    width: 20px;
  }
`;
