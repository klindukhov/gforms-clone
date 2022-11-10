import { useState } from "react";
import styled from "styled-components";
import Header from "./ui/components/Header";
import FormsListPage from "./ui/pages/FormsListPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import FormPage from "./ui/pages/FormPage";
import { COLOR_BACKGROUND } from "./ui/common";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormsListPage />,
    },
    {
      path: "/form",
      element: <FormPage />,
    },
  ]);
  return (
    <AppPage>
      <Header />
      <PageContent>
        <RouterProvider router={router} />
      </PageContent>
    </AppPage>
  );
}

const AppPage = styled.div`
  padding: 0px 0px 0px 0px;
`;

const PageContent = styled.div`
  background-color: ${COLOR_BACKGROUND};
  height: calc(94vh - 1px);
  width: 100vw;
  overflow: scroll;
`;
