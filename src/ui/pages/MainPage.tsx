import { Link, useNavigate } from "react-router-dom";
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
        <Link to='/form' style={{ textDecoration: "none" }}>
          <FormCard />
        </Link>
      </Page>
    </React.Fragment>
  );
}
