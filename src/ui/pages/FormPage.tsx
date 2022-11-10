import styled from "styled-components";
import QuestionCard, { QuestionTypes } from "../components/QuestionCard";
import { Page } from "../common";
import { useEffect, useState } from "react";
import { getForms, setForms } from "../../api";

export default function FormPage() {
  let [questions, setQuestions] = useState<
    { title: string; description: string }[]
  >([]);

  useEffect(() => {
    getForms().then((forms) => setQuestions(forms));
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setForms(questions);
    }
  }, [questions]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        title: "",
        description: "",
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
      {questions.map((q, i) => (
        <QuestionCard
          questionType={QuestionTypes.SHORT_ANSWER}
          title={q.title}
          description={q.description}
          setTitle={(newTitle: string) => {
            let qs = [...questions];
            qs[i].title = newTitle;
            setQuestions(qs);
          }}
          setDescription={(newDesc: string) => {
            let qs = [...questions];
            qs[i].description = newDesc;
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
  row-gap: 2vh;
  justify-items: center;
  align-content: start;
`;

const CreateSymbol = styled.div`
  color: white;
  height: 15vh;
  text-align: center;
  font-size: 10vh;
  cursor: pointer;
  margin-top: 2vh;
`;
