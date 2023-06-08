import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL, COLOR_TEXT } from "../common";
import formsLogo from "../../assets/forms-logo.png";
import searchIcon from "../../assets/Search_white.png";
import React from "react";

export default function MainPageHeader() {
  return (
    <React.Fragment>
      <HeaderPanel style={{ position: "absolute" }}>
        <HeaderText>
          <img
            src={formsLogo}
            style={{ height: "1.5rem", marginRight: "1rem" }}
          />
          GForms
        </HeaderText>
        <SearchBar placeholder={"Search forms"} />
        <img
          src={searchIcon}
          style={{
            height: "1rem",
            position: "relative",
            left: "-50rem",
            opacity: "0.6",
          }}
        />
      </HeaderPanel>
      <HeaderPanel />
    </React.Fragment>
  );
}

const HeaderPanel = styled.div`
  background-color: ${COLOR_PANEL};
  width: 100vw;
  height: 4rem;
  display: grid;
  align-items: center;
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: ${COLOR_BACKGROUND};
  grid-template-columns: 30% 40% 30%;
`;

const HeaderText = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  justify-items: center;
  align-self: center;
  justify-self: start;
  font-size: 1.5rem;
  margin: 0px;
  height: 3rem;
  padding: 0rem 1rem 0rem 1rem;
`;

const SearchBar = styled.input`
  width: 50rem;
  height: 2.3rem;
  border-radius: 0.5rem;
  padding: 0rem 0.5rem 0rem 3rem;
  border: 0px transparent;
  justify-self: center;
  outline: none;
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
`;

const ImgWrapper = styled.img``;
