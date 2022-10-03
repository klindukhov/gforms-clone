import styled from "styled-components";

export const COLOR_BACKGROUND = "#191919";
export const COLOR_PANEL = "#4f4f4f";

export const Page = styled.div`
  background-color: ${COLOR_BACKGROUND};
  min-height: 94vh;
  width: 100vw;
`;

export const Panel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.5vh;
  border: 1px solid transparent;
  &: hover {
    border: 1px solid white;
  }
`;
