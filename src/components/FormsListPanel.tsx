import { Link } from "react-router-dom";
import styled from "styled-components";
import FormProfile from "./FormProfile";

export default function FormsListPanel() {
  return (
    <ContentPanel>
      <Link to='/form' style={{ textDecoration: "none" }}>
        <FormProfile />
      </Link>
    </ContentPanel>
  );
}

const ContentPanel = styled.div`
  background-color: #191919;
  min-height: 94vh;
  width: 100vw;
  padding: 3vh;
`;
