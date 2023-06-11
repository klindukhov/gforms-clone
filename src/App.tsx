import { createContext, useState } from "react";
import styled from "styled-components";
import MainPage from "./ui/pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { COLOR_BACKGROUND } from "./ui/styles/common";
import FormPage from "./ui/pages/formPage/FormPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/form:formId",
      element: <FormPage />,
    },
  ]);
  return (
    <PageContent>
      <RouterProvider router={router} />
    </PageContent>
  );
}

const PageContent = styled.div`
  background-color: ${COLOR_BACKGROUND};
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
