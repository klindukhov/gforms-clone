import styled from "styled-components";
import { Page } from "../../styles/common";
import React, { useState } from "react";
import EditView from "./views/EditView";
import PreviewView from "./views/PreviewView";
import AnswersView from "./views/AnswersView";
import FormPageHeader from "../../components/FormPageHeader";

export default function FormPage() {
  const [tab, setTab] = useState("edit");
  const [headerTitle, setHeaderTitle] = useState(" ");
  const [formIdHeader, setFormIdHeader] = useState(" ")

  return (
    <React.Fragment>
      <FormPageHeader
        formTitle={headerTitle}
        formId={formIdHeader}
        tab={tab}
        setEdit={() => setTab("edit")}
        setPreview={() => setTab("preview")}
        setAnswers={() => setTab("answers")}
      />
      <FPage>
        {tab === "edit" && <EditView setHeaderTitle={setHeaderTitle} setFormIdHeader={setFormIdHeader}/>}
        {tab === "preview" && <PreviewView />}
        {tab === "answers" && <AnswersView />}
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
