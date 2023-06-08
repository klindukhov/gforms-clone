import React from "react";
import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL } from "../common";

export interface FormPageHeaderProps {
  formTitle: String;
  tab: String;
  setEdit: Function;
  setPreview: Function;
  setAnswers: Function;
}

export default function FormPageHeader({
  formTitle,
  tab,
  setEdit,
  setPreview,
  setAnswers,
}: FormPageHeaderProps) {
  const getTabStyle = (tabName: string) => {
    return {
      borderBottom:
        tab === tabName ? "0.2rem solid white" : "0.2rem solid transparent",
    };
  };

  return (
    <React.Fragment>
      <HeaderPanel style={{ position: "absolute" }}>
        <HeaderText>{formTitle}</HeaderText>
        <Tabs>
          <Tab style={getTabStyle("edit")} onClick={() => setEdit()}>
            Edit
          </Tab>
          <Tab style={getTabStyle("preview")} onClick={() => setPreview()}>
            Preview
          </Tab>
          <Tab style={getTabStyle("answers")} onClick={() => setAnswers()}>
            Answers
          </Tab>
        </Tabs>
      </HeaderPanel>
      <HeaderPanel />
    </React.Fragment>
  );
}

const HeaderPanel = styled.div`
  background-color: ${COLOR_PANEL};
  width: 100vw;
  height: 5rem;
  display: grid;
  align-items: center;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${COLOR_BACKGROUND};
`;

const HeaderText = styled.div`
  text-align: center;
  align-self: end;
  display: grid;
  align-content: center;
  font-size: 1.5rem;
  margin: 0px;
  height: 3rem;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-self: start;
  height: 1.7rem;
  margin: 0px;
  padding: 0px;
  justify-content: center;
`;

const Tab = styled.div`
  border: 0.2rem solid transparent;
  width: 6rem;
  text-align: center;
  cursor: pointer;
  transition: border-bottom 0.2s;
`;
