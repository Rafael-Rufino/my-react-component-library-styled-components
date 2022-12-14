import styled from "styled-components";
import theme from "../styles/themes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  input {
    border: none;
    color: ${theme.colors.black};
    background-color: ${theme.colors.input};
    border: 1px solid ${theme.colors.gray800};
    border-radius: 4px;
    height: 54px;
    padding-left: 10px;
    margin-top: 4px;
    ::placeholder {
      color: ${theme.colors.text};
      font-size: 0.8rem;
      text-transform: none;
    }
  }
`;
export const Label = styled.label`
  font-size: 1rem;
  color: ${theme.colors.text};
  padding-top: 10px;
`;