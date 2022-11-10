import styled from "styled-components";

export const COLOR_BACKGROUND = "#191919";
export const COLOR_PANEL = "#4f4f4f";
export const COLOR_TEXT = "white";

export const Page = styled.div`
  box-sizing: border-box;
  padding: 3vh;
  background-color: ${COLOR_BACKGROUND};
  min-height: calc(94vh - 1px);
  width: 100vw;
`;

export const Panel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.5vh;
  border: 1px solid transparent;
  &: hover {
    border: 1px solid #bebebe;
  }
`;

export const QPanel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.5vh;
  border: 1px solid transparent;
  padding: 2vh;
  width: 45vw;
  min-height: 15vh;
  display: grid;
  grid-template-columns: auto auto;
`;

export const TextField = styled.input`
  background-color: ${COLOR_PANEL};
  color: ${COLOR_TEXT};
  border: 1px solid transparent;
  transition: border-bottom 0.5s;
  &: hover {
    outline: none;
    border-bottom: 1px solid #bebebe;
    color: #bebebe;
  }
  &: focus {
    &: hover {
      border-bottom: 1px solid ${COLOR_TEXT};
      color: ${COLOR_TEXT};
    }
    outline: none;
    border-bottom: 1px solid ${COLOR_TEXT};
  }
  margin: 0.5vh;
`;

