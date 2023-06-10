import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Panel } from "../common";

export default function CreateNewFormCard() {
  const navigate = useNavigate();
  return (
    <CreateNewFormCardPanel onClick={() => navigate("/form")}>
      <CreateSymbol>+</CreateSymbol>
    </CreateNewFormCardPanel>
  );
}

const CreateNewFormCardPanel = styled(Panel)`
  height: 10rem;
  width: 16rem;
  display: grid;
  align-items: center;
  cursor: pointer;
`;

const CreateSymbol = styled.div`
  color: white;
  text-align: center;
  font-size: 5rem;
`;
