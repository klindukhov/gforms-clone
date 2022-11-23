import { QuestionType } from "./ui/components/QuestionCard";

export interface Question {
  question: string;
  questionType: QuestionType;
}

export interface Form {
  formTitle: string;
  formDescription: string;
  questions: Question[];
}

export const getForm = async () => {
  return await JSON.parse(localStorage.getItem("form") ?? "");
};

export const setForm = (form: Form) => {
  localStorage.setItem("form", JSON.stringify(form));
};
