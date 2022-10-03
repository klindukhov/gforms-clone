import { Link } from "react-router-dom";
import styled from "styled-components";
import FormProfile from "../components/FormProfile";
import { Page } from "../common";

export default function FormsListPage() {
  return (
    <ContentPanel>
      <Link to='/form' style={{ textDecoration: "none" }}>
        <FormProfile />
      </Link>
    </ContentPanel>
  );
}

const ContentPanel = styled(Page)`
  padding-top: 3vh;
`;
