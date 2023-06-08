import styled from "styled-components";
import {
  QPanel,
  TextField,
  DeleteButton,
  TextArea,
  Checkbox,
} from "../common";
import trashCan from "../../assets/trashCan.png";
import { useState } from "react";

export enum QuestionType {
  SHORT_ANSWER = "Short answer",
  LONG_ANSWER = "Long answer",
  MULTIPLE_CHOICE = "Multiple choice",
  DROPDOWN = "Dropdown",
  DATE = "Date",
  TIME = "Time",
}

export interface QuestionCardProps {
  question: string;
  setQuestion: Function;
  deleteQuestion: Function;
  questionType: string;
  setQuestionType: Function;
}

export default function QuestionCard(props: QuestionCardProps) {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => setChecked(!checked);

  return (
    <QPanel>
      <QuestionDiv>
        <TextField
          value={props.question}
          onChange={(e) => props.setQuestion(e.target.value)}
          placeholder='Question'
        />
        <Select onChange={(e) => props.setQuestionType(e.target.value)}>
          <option value={props.questionType}>
            {QuestionType[props.questionType as keyof typeof QuestionType]}
          </option>
          {Object.keys(QuestionType)
            .filter((t) => t !== props.questionType)
            .map((t) => (
              <option key={t} value={t}>
                {QuestionType[t as keyof typeof QuestionType]}
              </option>
            ))}
        </Select>
      </QuestionDiv>

      <AnswerDiv>
        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.SHORT_ANSWER && (
            <TextField placeholder='Short answer' disabled></TextField>
          )}

        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.LONG_ANSWER && (
            <TextArea placeholder='Long answer' disabled></TextArea>
          )}

        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.MULTIPLE_CHOICE && (
            <span>
              <Checkbox checked={checked} onClick={toggleChecked} />
              <TextField placeholder='Add option'></TextField>
            </span>
          )}

        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.DROPDOWN && <select></select>}

        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.DATE && (
            <TextField
              type='date'
              style={{ width: "7rem" }}
              disabled
            ></TextField>
          )}

        {props.questionType &&
          QuestionType[props.questionType as keyof typeof QuestionType] ===
            QuestionType.TIME && (
            <TextField
              type='time'
              style={{ width: "6rem" }}
              disabled
            ></TextField>
          )}
      </AnswerDiv>
      <QFooter>
        <DeleteButton onClick={() => props.deleteQuestion()}>
          <img src={trashCan} alt='X' style={{ width: "1.2rem" }} />
        </DeleteButton>
        <RequiredDiv>
          <Checkbox checked={checked} onClick={toggleChecked}></Checkbox>
          <label onClick={toggleChecked}> Required</label>
        </RequiredDiv>
      </QFooter>
    </QPanel>
  );
}

const Select = styled.select`
  background-color: transparent;
  border: 1px solid transparent;
  transition: border 0.5s;
  width: 10rem;
  border-radius: 0.3rem;
  &: hover {
    outline: none;
    border: 1px solid #bebebe;
    color: #bebebe;
  }
`;

const QFooter = styled.div`
  border-top: 1px solid RGB(190, 190, 190, 0.4);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  height: 1.5rem;
  padding-top: 1rem;
  margin-top: 1rem;
  alignself: end;
`;

const QuestionDiv = styled.div`
  display: grid;
  grid-template-columns: auto 12rem;
  height: 3rem;
  margin-bottom: 1rem;
`;

const AnswerDiv = styled.div`
  display: grid;
`;

const RequiredDiv = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;
