import styled from "styled-components";
export default function Header() {
  return (
    <HeaderPanel>
      <HeaderText>GForms</HeaderText>
    </HeaderPanel>
  );
}

const HeaderPanel = styled.div`
  background-color: #4f4f4f;
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
