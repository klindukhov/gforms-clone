import styled from "styled-components";

export default function FormPage() {
  return (
    <FormPagePanel>
      <CreateSymbol>+</CreateSymbol>
    </FormPagePanel>
  );
}

const FormPagePanel = styled.div`
  background-color: #191919;
  min-height: 94vh;
  width: 100vw;
  padding-top: 3vh;
  display: grid;
`;

const CreateSymbol = styled.div`
  color: white;
  text-align: center;
  font-size: 10vh;
`;
