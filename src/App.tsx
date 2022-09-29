import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
  return (
    <AppPage>
      <Header />
      <Content />
    </AppPage>
  );
}

const AppPage = styled.div`
  padding: 0px 0px 0px 0px;
`;
