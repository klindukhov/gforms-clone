import styled from "styled-components";

export const COLOR_BACKGROUND = "#191919";
export const COLOR_PANEL = "#4f4f4f";
export const COLOR_TEXT = "white";

export const Page = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${COLOR_BACKGROUND};
  min-height: calc(100vh - 1px - 4rem);
  width: 100vw;
`;

export const Panel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.3rem;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #bebebeb1;
  }
`;
