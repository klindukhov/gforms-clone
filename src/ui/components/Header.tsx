import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL } from "../common";

export default function Header() {
  return (
    <HeaderPanel>
      <HeaderText>GForms</HeaderText>
    </HeaderPanel>
  );
}

const HeaderPanel = styled.div`
  background-color: ${COLOR_PANEL};
  height: 3rem;
  width: 100vw;
  display: grid;
  align-items: center;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${COLOR_BACKGROUND};
`;

const HeaderText = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;
`;
