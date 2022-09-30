import styled from "styled-components";

export default function FormProfile() {
  return (
    <FormProfileDiv>
      <CreateSymbol>+</CreateSymbol>
    </FormProfileDiv>
  );
}

const FormProfileDiv = styled.div`
  height: 20vh;
  width: 15vw;
  background-color: #4f4f4f;
  border-radius: 1vh;
  display: grid;
  align-items: center;
  &: hover {
    border: 1px solid white;
  }
`;

const CreateSymbol = styled.div`
  color: white;
  text-align: center;
  font-size: 10vh;
`;
