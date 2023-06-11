import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL, Panel } from "../styles/common";
import KebabMenuButton from "../../assets/kebabMenuButton.png";
import { useState } from "react";

export interface FormCardProps {
  formId: string;
  formTitle: string;
}

export default function FormCard({ formTitle, formId }: FormCardProps) {
  const [isDialogueOpen, setIsDialogueOpen] = useState(false);
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("form" + formId);
  };

  return (
    <div>
      <FormCardPanel onClick={HandleClick}>
        <BottomCardPanel>
          <span style={{ justifySelf: "start" }}>{formTitle}</span>
          <div style={{ justifySelf: "end" }}>
            <KebabMenuWrapper
              onClick={(e) => {
                setIsDialogueOpen(!isDialogueOpen);
                e.stopPropagation();
              }}
            >
              <img src={KebabMenuButton} style={{ height: "1rem" }} />
            </KebabMenuWrapper>
            {isDialogueOpen && <KebabDialogue></KebabDialogue>}
          </div>
        </BottomCardPanel>
      </FormCardPanel>
    </div>
  );
}

const KebabDialogue = styled.div`
  height: 6rem;
  width: 10rem;
  background-color: ${COLOR_PANEL};
  border: solid 1px ${COLOR_BACKGROUND};
  position: absolute;
  border-radius: 0.2rem;
`;

const FormCardPanel = styled(Panel)`
  height: 15rem;
  width: 13rem;
  display: grid;
  align-items: center;
  cursor: pointer;
  background-color: ${COLOR_BACKGROUND};
  padding-bottom: 0px;
  padding-left: 0px;
  border: solid 1px ${COLOR_BACKGROUND};
`;

const BottomCardPanel = styled.div`
  max-width: 13rem;
  height: 2rem;
  background-color: ${COLOR_PANEL};
  align-self: end;
  border-radius: 0rem 0rem 0.2rem 0.2rem;
  padding: 1rem;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
`;

const KebabMenuWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  background-color: transparent;
  justify-self: end;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 100;
  &: hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
