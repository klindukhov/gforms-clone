import { createContext, useState } from "react";
import styled from "styled-components";
import MainPage from "./ui/pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./ui/pages/FormPage";
import { COLOR_BACKGROUND } from "./ui/common";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/form",
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
