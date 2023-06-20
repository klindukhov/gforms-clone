import { createContext, useState } from "react";
import styled from "styled-components";
import MainPage from "@pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { COLOR_BACKGROUND } from "@styles/common";
import FormPage from "@pages/formPage/FormPage";

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
