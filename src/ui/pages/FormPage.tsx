import styled from "styled-components";
import FormTitleTab from "../components/FormTitleTab";
import { Page } from "../common";

export default function FormPage() {
  return (
    <FormPageDiv>
      <FormTitleTab />
      <CreateSymbol>+</CreateSymbol>
    </FormPageDiv>
  );
}

const FormPageDiv = styled(Page)`
  padding-top: 3vh;
  display: grid;
  justify-items: center;
  align-items: start;
`;

const CreateSymbol = styled.div`
  color: white;
  text-align: center;
  font-size: 10vh;
`;
