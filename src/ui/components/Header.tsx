import styled from "styled-components";
import { COLOR_PANEL } from "../common";

export default function Header() {
  return (
    <HeaderPanel>
      <HeaderText>GForms</HeaderText>
    </HeaderPanel>
  );
}

const HeaderPanel = styled.div`
  background-color: ${COLOR_PANEL};
  height: 6vh;
  width: 100vw;
  display: grid;
  align-items: center;
`;

const HeaderText = styled.div`
  color: white;
  text-align: center;
  font-size: 3vh;
`;
