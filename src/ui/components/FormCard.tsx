import styled from "styled-components";
import { Panel } from "../common";

export default function FormCard() {
  return (
    <FormCardPanel>
      <CreateSymbol>+</CreateSymbol>
    </FormCardPanel>
  );
}

const FormCardPanel = styled(Panel)`
  height: 20vh;
  width: 15vw;
  display: grid;
  align-items: center;
`;

const CreateSymbol = styled.div`
  color: white;
  text-align: center;
  font-size: 10vh;
`;
