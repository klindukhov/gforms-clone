import styled from "styled-components";
import { COLOR_TEXT } from "./common";

export interface CheckboxProps {
  checked: boolean;
  onClick: Function;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <ChB
      style={{
        backgroundColor: props.checked ? COLOR_TEXT : "transparent",
      }}
      onClick={() => props.onClick()}
    ></ChB>
  );
};

const ChB = styled.div`
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  border: 1px solid ${COLOR_TEXT};
  border-radius: 0.1rem;
  &:hover {
    opacity: 0.7;
  }
`;
