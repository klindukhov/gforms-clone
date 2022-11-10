import styled from "styled-components";
import { QPanel, TextField } from "../common";

export enum QuestionTypes {
  SHORT_ANSWER = "Short answer",
  LONG_ANSWER = "Long answer",
  MULTIPLE_CHOICE = "Multiple choice",
  DROPDOWN = "Dropdown",
  DATE = "Date",
  TIME = "Time",
}

export interface QuestionCardProps {
  title: string;
  description: string;
  setTitle: Function;
  setDescription: Function;
  deleteQuestion: Function;
  questionType: QuestionTypes;
}

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <QPanel>
      <TextField
        value={props.title}
        onChange={(e) => props.setTitle(e.target.value)}
        placeholder='Title'
      />
      <DeleteButton onClick={() => props.deleteQuestion()}>X</DeleteButton>

      <TextField
        value={props.description}
        onChange={(e) => props.setDescription(e.target.value)}
        placeholder='Description'
      />
    </QPanel>
  );
}

const DeleteButton = styled.div`
  cursor: pointer;
  width: 2vw;
  justify-self: end;
  &: hover {
    color: #bebebe;
  }
`;
