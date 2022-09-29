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
  background-color: white;
  border-radius: 1vh;
  display: grid;
  align-items: center;
  &: hover {
    border: 1px solid black;
  }
`;

const CreateSymbol = styled.div`
  color: black;
  text-align: center;
  font-size: 10vh;
`;
