import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getNewFormId } from "@root/api";
import { Panel } from "@styles/common";

export default function CreateNewFormCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    getNewFormId().then((id) => navigate("/form" + id));
  };

  return (
    <CreateNewFormCardPanel onClick={handleClick}>
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
