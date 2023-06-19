import styled from "styled-components";
import {
  TextField,
  DeleteButton,
  TextArea,
  Select,
} from "../styles/inputStyles";
import trashCan from "../../assets/trashCan.png";
import { Checkbox } from "../styles/Checkbox";
import { COLOR_PANEL } from "../styles/common";
import { getQuestionType, Question, QuestionType } from "../../api";

export interface QuestionCardProps {
  question: Question;
  updateQuestion: Function;
  deleteQuestion: Function;
  createNewQuestionOption: Function;
}

export default function QuestionCard({
  question,
  updateQuestion,
  deleteQuestion,
  createNewQuestionOption,
}: QuestionCardProps) {
  const toggleIsRequired = () => {
    let newQuestion = question;
    newQuestion.isQuestionRequired = !newQuestion.isQuestionRequired;
    updateQuestion(newQuestion);
  };

  const handleQuestionTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newQuestion = question;
    newQuestion.question = e.target.value;
    updateQuestion(newQuestion);
  };

  const handleQuestionTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    let newQuestion = question;
    newQuestion.questionType = getQuestionType(e.target.value);
    updateQuestion(newQuestion);
  };

  const handleQuestionOptionsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionId: string
  ) => {
    let newQuestion = question;
    newQuestion.questionOptions[optionId] = e.target.value;
    updateQuestion(newQuestion);
  };

  const handleDeleteQuestionOption = (optionId: string) => {
    let newQuestion = question;
    delete newQuestion.questionOptions[optionId];
    updateQuestion(newQuestion);
  };

  return (
    <QPanel>
      <QuestionDiv>
        <TextField
          value={question.question}
          onChange={handleQuestionTextChange}
          placeholder='Question'
        />
        <Select onChange={handleQuestionTypeChange}>
          <option value={question.questionType}>{question.questionType}</option>
          {Object.values(QuestionType)
            .filter((t) => t !== question.questionType)
            .map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
        </Select>
      </QuestionDiv>

      <AnswerDiv>
        {question.questionType &&
          question.questionType === QuestionType.SHORT_ANSWER && (
            <TextField placeholder='Short answer' disabled></TextField>
          )}

        {question.questionType &&
          question.questionType === QuestionType.LONG_ANSWER && (
            <TextArea
              style={{ maxWidth: "53rem" }}
              placeholder='Long answer'
              disabled
            ></TextArea>
          )}

        {question.questionType &&
          (question.questionType === QuestionType.MULTIPLE_CHOICE ||
            question.questionType === QuestionType.DROPDOWN) && (
            <div>
              {Object.keys(question.questionOptions).map((optionId: string) => (
                <span key={optionId} style={{ display: "grid" }}>
                  <div>
                    <Checkbox checked={false} onClick={() => {}} />
                    <TextField
                      placeholder='Option'
                      value={question.questionOptions[optionId]}
                      onChange={(e) => handleQuestionOptionsChange(e, optionId)}
                    ></TextField>
                    {Object.keys(question.questionOptions) &&
                      Object.keys(question.questionOptions).length > 1 && (
                        <XDeleteButton
                          onClick={() => handleDeleteQuestionOption(optionId)}
                        >
                          x
                        </XDeleteButton>
                      )}
                  </div>
                </span>
              ))}
              <span>
                <AddOptionButton
                  onClick={() => createNewQuestionOption(question.questionId)}
                >
                  Add option
                </AddOptionButton>
              </span>
            </div>
          )}

        {question.questionType &&
          question.questionType === QuestionType.DATE && (
            <TextField
              type='date'
              style={{ width: "7rem" }}
              disabled
            ></TextField>
          )}

        {question.questionType &&
          question.questionType === QuestionType.TIME && (
            <TextField
              type='time'
              style={{ width: "6rem" }}
              disabled
            ></TextField>
          )}
      </AnswerDiv>
      <QFooter>
        <DeleteButton onClick={() => deleteQuestion()}>
          <img src={trashCan} alt='X' style={{ width: "1.2rem" }} />
        </DeleteButton>
        <RequiredDiv>
          <Checkbox
            checked={question.isQuestionRequired}
            onClick={toggleIsRequired}
          ></Checkbox>
          <label onClick={toggleIsRequired}> Required</label>
        </RequiredDiv>
      </QFooter>
    </QPanel>
  );
}

const QFooter = styled.div`
  border-top: 1px solid RGB(190, 190, 190, 0.4);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: end;
  height: 1.5rem;
  padding-top: 1rem;
  margin-top: 1rem;
  align-self: end;
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
  margin-top: 0.4rem;
`;

export const QPanel = styled.div`
  background-color: ${COLOR_PANEL};
  border-radius: 0.3rem;
  border: 1px solid transparent;
  padding: 1rem;
  width: 54rem;
  min-height: 8rem;
  display: grid;
`;

const AddOptionButton = styled.div`
  cursor: pointer;
  margin-left: 1.3rem;
  font-size: 0.9rem;
  max-width: fit-content;
  border-bottom: 1px solid transparent;
  margin-top: 0.5rem;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

const XDeleteButton = styled.span`
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
