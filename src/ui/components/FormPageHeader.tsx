import React from "react";
import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL } from "../styles/common";
import formsLogo from "../../assets/formsLogo.png";
import { useNavigate } from "react-router-dom";
import { deleteFormById } from "../../api";
import trashCan from "../../assets/trashCan.png";

export interface FormPageHeaderProps {
  formTitle: String;
  formId: string;
  tab: String;
  setEdit: Function;
  setPreview: Function;
  setAnswers: Function;
}

export default function FormPageHeader({
  formTitle,
  formId,
  tab,
  setEdit,
  setPreview,
  setAnswers,
}: FormPageHeaderProps) {
  const navigate = useNavigate();

  const getTabStyle = (tabName: string) => {
    return {
      borderBottom:
        tab === tabName ? "0.2rem solid white" : "0.2rem solid transparent",
    };
  };

  return (
    <React.Fragment>
      <HeaderPanel style={{ position: "absolute" }}>
        <HeaderText>
          <img
            src={formsLogo}
            style={{ height: "1.5rem", marginRight: "1rem", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          {formTitle}
          <TrashCanWrapper
            onClick={(e) => {
              if (window.confirm("Press OK to delete a form")) {
                deleteFormById(formId);
                navigate("/");
              }
              e.stopPropagation();
            }}
          >
            <img src={trashCan} style={{ height: "1rem" }} />
          </TrashCanWrapper>
        </HeaderText>
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
  height: 6rem;
  display: grid;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${COLOR_BACKGROUND};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-self: end;
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

const HeaderText = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-items: center;
  align-self: end;
  justify-self: start;
  font-size: 1.2rem;
  margin: 0px;
  height: 3rem;
  padding: 0rem 1rem 0rem 1rem;
`;

export const TrashCanWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: transparent;
  justify-self: end;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 100;
  margin-left: 1rem;
  margin-top: -0.4rem;
  &: hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
