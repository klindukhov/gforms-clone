import { useState } from "react";
import styled from "styled-components";
import Header from "./ui/components/Header";
import FormsListPage from "./ui/pages/FormsListPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import FormPage from "./ui/pages/FormPage";

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
      <RouterProvider router={router} />
    </AppPage>
  );
}

const AppPage = styled.div`
  padding: 0px 0px 0px 0px;
`;
