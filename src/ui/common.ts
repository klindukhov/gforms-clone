import styled from "styled-components";

export const COLOR_BACKGROUND = "#191919";
export const COLOR_PANEL = "#4f4f4f";
export const COLOR_TEXT = "white";

export const Page = styled.div`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${COLOR_BACKGROUND};
  min-height: calc(94vh - 1px);
  width: 100vw;
`;

export const Panel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.3rem;
  border: 1px solid transparent;
  &: hover {
    border: 1px solid #bebebe;
  }
`;

export const QPanel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.3rem;
  border: 1px solid transparent;
  padding: 1rem;
  width: 54rem;
  min-height: 8rem;
  display: grid;
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
  margin: 0.3rem;
`;

export const TextArea = styled.textarea`
  background-color: ${COLOR_PANEL};
  color: ${COLOR_TEXT};
  border: 1px solid transparent;
  transition: border 0.5s;
  border-radius: 0.3rem;
  &: hover {
    outline: none;
    border: 1px solid #bebebe;
    color: #bebebe;
  }
  &: focus {
    &: hover {
      border: 1px solid ${COLOR_TEXT};
      color: ${COLOR_TEXT};
    }
    outline: none;
    border: 1px solid ${COLOR_TEXT};
  }
  margin: 0.3rem;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  width: 2.5rem;
  &: hover {
    color: #bebebe;
  }
  border-right: 1px solid RGB(190, 190, 190, 0.4);
`;
