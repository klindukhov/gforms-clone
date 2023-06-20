import { useNavigate } from "react-router-dom";
import CreateNewFormCard from "@components/CreateNewFormCard";
import { COLOR_PANEL, Page } from "@styles/common";
import MainPageHeader from "@components/MainPageHeader";
import styled from "styled-components";
import FormCard from "@components/FormCard";
import { useEffect, useState } from "react";
import { getFormsList } from "@root/api";

export default function MainPage() {
  const [formsList, setFormsList] = useState<{ [formId: string]: string }>({});
  useEffect(() => {
    updateList();
  }, []);

  const updateList = () => {
    getFormsList().then((formsList) => {
      setFormsList(formsList);
    });
  };

  return (
    <CustomBackground>
      <MainPageHeader />
      <MainPageNewFormSection>
        <span style={{ marginBottom: "1rem" }}>Create a new Form</span>
        <CreateNewFormCard />
      </MainPageNewFormSection>
      <MainPageAllFormsSection>
        {Object.keys(formsList).map((formId) => (
          <FormCard
            key={formId}
            formId={formId}
            formTitle={formsList[formId]}
            updateList={updateList}
          />
        ))}
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
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  row-gap: 1rem;
`;

const CustomBackground = styled.div`
  background-color: ${COLOR_PANEL};
  min-height: 100vh;
`;
