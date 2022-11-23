import styled from "styled-components";
import QuestionCard, { QuestionType } from "../components/QuestionCard";
import { Page, QPanel, TextField } from "../common";
import { useEffect, useState } from "react";
import { getForm, Question, setForm } from "../../api";

export default function FormPage() {
  let [formTitle, setFormTitle] = useState("New Form");
  let [formDescription, setFormDescription] = useState("New Description");

  let [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    getForm().then((form) => {
      setFormTitle(form.formTitle);
      setFormDescription(form.formDescription);
      setQuestions(
        form.questions.map((q: { question: string; questionType: string }) => {
          return {
            question: q.question,
            questionType:
              Object.keys(QuestionType)[
                Object.keys(QuestionType).indexOf(
                  q.questionType as QuestionType
                )
              ],
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setForm({
        formTitle: formTitle,
        formDescription: formDescription,
        questions: questions,
      });
      console.log({
        formTitle: formTitle,
        formDescription: formDescription,
        questions: questions,
      });
    }
  }, [questions, formTitle, formDescription]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        questionType: QuestionType.SHORT_ANSWER,
      },
    ]);
  };

  const deleteQuestion = (i: number) => {
    let qs = [...questions];
    qs.splice(i, 1);
    setQuestions(qs);
  };

  return (
    <FPage>
      <QPanel style={{ width: "54rem" }}>
        <TextField
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          placeholder='Title'
        />

        <TextField
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          placeholder='Description'
        />
      </QPanel>
      {questions &&
        questions.map((q, i) => (
          <QuestionCard
            key={i}
            questionType={q?.questionType}
            question={q?.question}
            setQuestion={(q: string) => {
              let qs = [...questions];
              qs[i].question = q;
              setQuestions(qs);
            }}
            setQuestionType={(qt: QuestionType) => {
              let qs = [...questions];
              qs[i].questionType = qt;
              setQuestions(qs);
            }}
            deleteQuestion={() => deleteQuestion(i)}
          />
        ))}

      <CreateSymbol onClick={addQuestion}>+</CreateSymbol>
    </FPage>
  );
}

const FPage = styled(Page)`
  display: grid;
  row-gap: 1rem;
  justify-items: center;
  align-content: start;
`;

const CreateSymbol = styled.div`
  color: white;
  height: 8rem;
  text-align: center;
  font-size: 5rem;
  cursor: pointer;
  margin-top: 1rem;
`;
