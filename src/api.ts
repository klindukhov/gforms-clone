import { QuestionType } from "./ui/components/QuestionCard";
import { v4 as uuidv4 } from "uuid";

export interface Question {
  question: string;
  questionType: QuestionType;
}

export interface Form {
  formId: string;
  formTitle: string;
  formDescription: string;
  formQuestions: Question[];
}

export interface FormsList {
  formId: string;
  formTitle: string;
}

export const getFormsList = async (): Promise<{ [index: string]: any }> => {
  return await JSON.parse(localStorage.getItem("formsList") ?? "{}");
};

export const updateFormsList = async (formId: string, formTitle: string) => {
  let currentList = await getFormsList();
  currentList[formId] = formTitle;
  localStorage.setItem("formsList", JSON.stringify(currentList));
};

export const getFormById = async (formId: string) => {
  return await JSON.parse(localStorage.getItem(formId) ?? "{}");
};

export const setFormById = (form: Form) => {
  updateFormsList(form.formId, form.formTitle);
  localStorage.setItem(form.formId, JSON.stringify(form));
};

export const getNewFormId = async () => {
  const newFormId = uuidv4();

  const newForm: Form = {
    formId: newFormId,
    formTitle: "New Form",
    formDescription: "",
    formQuestions: [],
  };
  setFormById(newForm);
  let createdForm = await getFormById(newFormId);
  while (!createdForm) {
    createdForm = await getFormById(newFormId);
  }
  return createdForm.formId;
};

export const doesTheFormExistById = async (formId: string) => {
  const formsList = await getFormsList();
  return !!formsList[formId];
};