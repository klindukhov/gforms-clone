import { createContext, useState } from "react";
import styled from "styled-components";
import MainPage from "./ui/pages/MainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormPage from "./ui/pages/FormPage";
import { COLOR_BACKGROUND } from "./ui/common";

export const TabContext = createContext({
  value: "edit",
  setEdit: () => {},
  setPreview: () => {},
  setAnswers: () => {},
});

export default function App() {
  const [headerTabs, setHeaderTabs] = useState(false);

  const [tab, setTab] = useState("edit");

  const setEdit = () => setTab("edit");
  const setPreview = () => setTab("preview");
  const setAnswers = () => setTab("answers");

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
    <TabContext.Provider
      value={{
        value: tab,
        setEdit: () => {
          setEdit();
        },
        setPreview: () => {
          setPreview();
        },
        setAnswers: () => {
          setAnswers();
        },
      }}
    >
      <PageContent>
        <RouterProvider router={router} />
      </PageContent>
    </TabContext.Provider>
  );
}

const PageContent = styled.div`
  background-color: ${COLOR_BACKGROUND};
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
