import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import FormsListPanel from "./components/FormsListPanel";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import FormPage from "./components/FormPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormsListPanel />,
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
