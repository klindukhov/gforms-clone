import { useNavigate } from "react-router-dom";
import FormCard from "../components/FormCard";
import { Page } from "../common";
import React from "react";
import MainPageHeader from "../components/MainPageHeader";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <MainPageHeader />
      <Page>
        <FormCard />
      </Page>
    </React.Fragment>
  );
}
