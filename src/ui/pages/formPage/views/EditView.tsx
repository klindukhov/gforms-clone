import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  getNewFormQuestionOptionNameId,
  doesTheFormExistById,
  getFormById,
  getNewFormId,
  getNewQuestionId,
  Question,
  QuestionType,
  setForm,
} from "../../../../api";
import QuestionCard, { QPanel } from "../../../components/QuestionCard";
import { TextField } from "../../../styles/inputStyles";
import { useNavigate, useParams } from "react-router-dom";

interface EditViewProps {
  setHeaderTitle: Function;
  setFormIdHeader: Function;
}

export default function EditView({
  setHeaderTitle,
  setFormIdHeader,
}: EditViewProps) {
  const { formId } = useParams();
  const navigate = useNavigate();

  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");

  const [formQuestions, setFormQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setHeaderTitle(formTitle);
    setFormIdHeader(formId);
  }, [formTitle, formId]);

  useEffect(() => {
    if (!formId) return;
    doesTheFormExistById(formId).then((doesExist) => {
      if (!doesExist) {
        alert("Form with such id does not exist" + formId);
        navigate("/");
      }
    });
    getFormById(formId).then((form) => {
      setFormTitle(form.formTitle);
      setFormDescription(form.formDescription);
      setFormQuestions(form.formQuestions);
    });
  }, []);

  const updateForm = (
    fTitle: string,
    fDescription: string,
    fQuestions: Question[]
  ) => {
    if (!formId) {
      alert("Something went wrong");
      return;
    }
    setForm({
      formId: formId,
      formTitle: fTitle ?? "New Form",
      formDescription: fDescription,
      formQuestions: fQuestions,
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormTitle(e.target.value);
    updateForm(
      e.target.value && e.target.value !== " " ? e.target.value : "New Form",
      formDescription,
      formQuestions
    );
  };

  const handleTitleFocusOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formTitle || formTitle === " ") {
      setFormTitle("New Form");
      updateForm("New Form", formDescription, formQuestions);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDescription(e.target.value);
    updateForm(formTitle, e.target.value, formQuestions);
  };

  const createNewQuestion = async () => {
    if (!formId) {
      alert("Something went wrong");
      return;
    }
    const newQuestionId = await getNewQuestionId(formId);
    const newQuestionList = [
      ...formQuestions,
      {
        questionId: newQuestionId[0],
        question: "",
        questionType: QuestionType.SHORT_ANSWER,
        isQuestionRequired: false,
        questionOptions: { [newQuestionId[2]]: newQuestionId[1] },
      },
    ];
    setFormQuestions(newQuestionList);
  };

  const deleteQuestion = (questionId: string) => {
    let newQuestionList: Question[] = [...formQuestions];
    newQuestionList.splice(
      newQuestionList.findIndex((q: Question) => q.questionId === questionId),
      1
    );
    setFormQuestions(newQuestionList);
    updateForm(formTitle, formDescription, newQuestionList);
  };

  const updateQuestion = (question: Question) => {
    let newQuestionList: Question[] = [...formQuestions];
    newQuestionList[
      newQuestionList.findIndex(
        (q: Question) => q.questionId === question.questionId
      )
    ] = question;
    setFormQuestions(newQuestionList);
    updateForm(formTitle, formDescription, newQuestionList);
  };

  const createNewQuestionOption = async (questionId: string) => {
    if (!formId) {
      alert("Something went wrong");
      return;
    }
    const [optionName, optionId] = await getNewFormQuestionOptionNameId(
      formId,
      questionId
    );
    let newFormQuestions: Question[] = [];
    Object.assign(newFormQuestions, formQuestions);
    newFormQuestions[
      formQuestions.findIndex((q: Question) => q.questionId === questionId)
    ].questionOptions[optionId] = optionName;
    setFormQuestions(newFormQuestions);
  };

  return (
    <React.Fragment>
      <QPanel style={{ width: "64rem" }}>
        <TextField
          style={{ fontSize: 18 }}
          value={formTitle}
          onChange={(e) => handleTitleChange(e)}
          onBlur={(e) => handleTitleFocusOut(e)}
          placeholder='Title'
        />

        <TextField
          value={formDescription}
          onChange={(e) => handleDescriptionChange(e)}
          placeholder='Description'
        />
      </QPanel>
      {formQuestions &&
        formQuestions.map((q) => (
          <QuestionCard
            key={q.questionId}
            question={q}
            updateQuestion={updateQuestion}
            deleteQuestion={() => deleteQuestion(q.questionId)}
            createNewQuestionOption={createNewQuestionOption}
          />
        ))}

      <CreateSymbol onClick={createNewQuestion}>+</CreateSymbol>
    </React.Fragment>
  );
}

const CreateSymbol = styled.div`
  color: white;
  height: 8rem;
  text-align: center;
  font-size: 5rem;
  cursor: pointer;
  margin-top: 1rem;
`;
