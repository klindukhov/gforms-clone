import { useNavigate } from "react-router-dom";
import CreateNewFormCard from "../components/FormCard";
import { COLOR_PANEL, Page } from "../common";
import MainPageHeader from "../components/MainPageHeader";
import styled from "styled-components";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <CustomBackground>
      <MainPageHeader />
      <MainPageNewFormSection>
        <span style={{ marginBottom: "1rem" }}>Create a new Form</span>
        <CreateNewFormCard />
      </MainPageNewFormSection>
      <MainPageAllFormsSection>
        <CreateNewFormCard />
      </MainPageAllFormsSection>
    </CustomBackground>
  );
}

const MainPageNewFormSection = styled(Page)`
  padding-left: 20vw;
  padding-right: 20vw;
  min-height: 0rem;
  justify-content: center;
  display: grid;
  text-align: center;
`;

const MainPageAllFormsSection = styled(Page)`
  padding-left: 20vw;
  padding-right: 20vw;
  background-color: transparent;
  min-height: 0rem;
`;

const CustomBackground = styled.div`
  background-color: ${COLOR_PANEL};
  min-height: 100vh;
`;
