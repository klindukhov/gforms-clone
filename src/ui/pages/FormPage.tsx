import styled from "styled-components";
import { Page } from "../common";
import React, { useContext, useEffect } from "react";
import { TabContext } from "../../App";
import EditView from "./views/EditView";
import PreviewView from "./views/PreviewView";
import AnswersView from "./views/AnswersView";
import FormPageHeader from "../components/FormPageHeader";

export default function FormPage() {
  const tab = useContext(TabContext);

  return (
    <React.Fragment>
      <FormPageHeader />
      <FPage>
        {tab.value === "edit" && <EditView />}
        {tab.value === "preview" && <PreviewView />}
        {tab.value === "answers" && <AnswersView />}
      </FPage>
    </React.Fragment>
  );
}

const FPage = styled(Page)`
  display: grid;
  row-gap: 1rem;
  min-height: calc(100vh - 1px - 6rem);
  justify-items: center;
  align-content: start;
`;
