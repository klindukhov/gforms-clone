import styled from "styled-components";
import FormProfile from "./FormProfile";

export default function Content() {
  return (
    <ContentPanel>
      <FormProfile/>
    </ContentPanel>
  );
}

const ContentPanel = styled.div`
  background-color: #c5c5c5;
  min-height: 94vh;
  width: 100vw;
  padding: 3vh;
`;
