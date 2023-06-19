import styled from "styled-components";
import { COLOR_PANEL, COLOR_TEXT } from "./common";

export const TextField = styled.input`
  background-color: ${COLOR_PANEL};
  color: ${COLOR_TEXT};
  border: 1px solid transparent;
  transition: border-bottom 0.5s;
  margin: 0.3rem;
  &:hover {
    outline: none;
    border-bottom: 1px solid #bebebe;
    color: #bebebe;
  }
  &:focus {
    &:hover {
      border-bottom: 1px solid ${COLOR_TEXT};
      color: ${COLOR_TEXT};
    }
    outline: none;
    border-bottom: 1px solid ${COLOR_TEXT};
  }
`;

export const TextArea = styled.textarea`
  background-color: ${COLOR_PANEL};
  color: ${COLOR_TEXT};
  border: 1px solid transparent;
  transition: border 0.5s;
  border-radius: 0.3rem;
  margin: 0.3rem;
  &:hover {
    outline: none;
    border: 1px solid #bebebe;
    color: #bebebe;
  }
  &:focus {
    &:hover {
      border: 1px solid ${COLOR_TEXT};
      color: ${COLOR_TEXT};
    }
    outline: none;
    border: 1px solid ${COLOR_TEXT};
  }
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  width: 2.5rem;
  border-right: 1px solid RGB(190, 190, 190, 0.4);
  &:hover {
    opacity: 0.7;
  }
`;

export const Select = styled.select`
  background-color: transparent;
  border: 1px solid transparent;
  transition: border 0.5s;
  width: 10rem;
  border-radius: 0.3rem;
  &:hover {
    outline: none;
    border: 1px solid #bebebe;
    color: #bebebe;
  }
`;
