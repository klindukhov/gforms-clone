import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLOR_BACKGROUND, COLOR_PANEL, Panel } from "@styles/common";
import trashCan from "@assets/trashCan.png";
import { deleteFormById, updateFormsList } from "@root/api";

export interface FormCardProps {
  formId: string;
  formTitle: string;
  formLastOpened: string;
  updateList: Function;
}

export default function FormCard({
  formTitle,
  formId,
  formLastOpened,
  updateList,
}: FormCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const timestamp = new Date();
    updateFormsList({
      formId: formId,
      formTitle: formTitle,
      formLastOpened: timestamp,
    });
    navigate("form" + formId);
  };

  return (
    <div>
      <FormCardPanel onClick={handleClick}>
        <BottomCardPanel>
          <div
            style={{
              width: "11rem",
              height: "1rem",
              justifySelf: "start",
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              alignSelf: "start",
            }}
          >
            {formTitle}
          </div>
          <div
            style={{
              height: "1rem",
              fontSize: "0.9rem",
              display: "grid",
              gridTemplateColumns: "auto auto",
              alignSelf: "end",
            }}
          >
            <span style={{ alignSelf: "end", paddingBottom: "0.1rem" }}>
              Opened: {formLastOpened.split("T")[0]}
            </span>
            <div style={{ justifySelf: "end" }}>
              <KebabMenuWrapper
                onClick={(e) => {
                  if (window.confirm("Press OK to delete a form")) {
                    deleteFormById(formId).then(() => updateList());
                  }
                  e.stopPropagation();
                }}
              >
                <img src={trashCan} style={{ height: "0.8rem" }} />
              </KebabMenuWrapper>
            </div>
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
  grid-template-columns: auto;
`;

export const KebabMenuWrapper = styled.div`
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 1rem;
  background-color: transparent;
  justify-self: end;
  align-self: center;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 100;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
