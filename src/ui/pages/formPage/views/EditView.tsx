import styled from "styled-components";
import React, { useEffect, useState } from "react";
import {
  doesTheFormExistById,
  getFormById,
  Question,
  setFormById,
} from "../../../../api";
import QuestionCard, {
  QPanel,
  QuestionType,
} from "../../../components/QuestionCard";
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

  const [formQuestions, setQuestions] = useState<Question[]>([]);

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
      setQuestions(
        form.questions &&
          form.questions.map(
            (q: { question: string; questionType: string }) => {
              return {
                question: q.question,
                questionType:
                  Object.keys(QuestionType)[
                    Object.keys(QuestionType).indexOf(
                      q.questionType as QuestionType
                    )
                  ],
              };
            }
          )
      );
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
    setFormById({
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

  const addQuestion = () => {
    setQuestions([
      ...formQuestions,
      {
        question: "",
        questionType: QuestionType.SHORT_ANSWER,
      },
    ]);
  };

  const deleteQuestion = (i: number) => {
    let qs = [...formQuestions];
    qs.splice(i, 1);
    setQuestions(qs);
  };

  return (
    <React.Fragment>
      <QPanel style={{ width: "54rem" }}>
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
        formQuestions.map((q, i) => (
          <QuestionCard
            key={i}
            questionType={q?.questionType}
            question={q?.question}
            setQuestion={(q: string) => {
              let qs = [...formQuestions];
              qs[i].question = q;
              setQuestions(qs);
            }}
            setQuestionType={(qt: QuestionType) => {
              let qs = [...formQuestions];
              qs[i].questionType = qt;
              setQuestions(qs);
            }}
            deleteQuestion={() => deleteQuestion(i)}
          />
        ))}

      <CreateSymbol onClick={addQuestion}>+</CreateSymbol>
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
