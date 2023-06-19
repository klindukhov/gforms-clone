import { v4 as uuidv4 } from "uuid";

export interface Question {
  questionId: string;
  question: string;
  questionType: QuestionType;
  isQuestionRequired: boolean;
  questionOptions: { [questionOptionId: string]: string };
}

export enum QuestionType {
  SHORT_ANSWER = "Short answer",
  LONG_ANSWER = "Long answer",
  MULTIPLE_CHOICE = "Multiple choice",
  DROPDOWN = "Dropdown",
  DATE = "Date",
  TIME = "Time",
}

export const getQuestionType = (qTypeString: string) => {
  switch (qTypeString) {
    case "Short answer":
      return QuestionType.SHORT_ANSWER;
    case "Long answer":
      return QuestionType.LONG_ANSWER;
    case "Multiple choice":
      return QuestionType.MULTIPLE_CHOICE;
    case "Dropdown":
      return QuestionType.DROPDOWN;
    case "Date":
      return QuestionType.DATE;
    case "Time":
      return QuestionType.TIME;
    default:
      return QuestionType.SHORT_ANSWER;
  }
};

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
  let form = await JSON.parse(localStorage.getItem(formId) ?? "{}");
  form.formQuestions.forEach(
    (q: any) => (q.questionType = getQuestionType(q.questionType))
  );
  return form;
};

export const setForm = (form: Form) => {
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
  setForm(newForm);
  let createdForm = await getFormById(newFormId);
  while (!createdForm) {
    createdForm = await getFormById(newFormId);
  }
  return createdForm.formId;
};

export const getNewQuestionId = async (formId: string) => {
  const newQuestionId = uuidv4();

  let form = await getFormById(formId);
  const newQuestionList = [
    ...form.formQuestions,
    {
      questionId: newQuestionId,
      question: "",
      questionType: QuestionType.SHORT_ANSWER,
      isQuestionRequired: false,
      questionOptions: {},
    },
  ];
  form.formQuestions = newQuestionList;
  setForm(form);
  let upatedForm = await getFormById(formId);
  while (
    !upatedForm.formQuestions.some(
      (q: Question) => q.questionId === newQuestionId
    )
  ) {
    upatedForm = await getFormById(formId);
  }
  const [qOName, qOId] = await getNewFormQuestionOptionNameId(
    formId,
    newQuestionId
  );
  return [newQuestionId, qOName, qOId];
};

export const getNewFormQuestionOptionNameId = async (
  formId: string,
  questionId: string
) => {
  const newQuestionOptionId = uuidv4();
  const form = await getFormById(formId);
  const question =
    form.formQuestions[
      form.formQuestions.findIndex((q: Question) => q.questionId === questionId)
    ];

  let optionName = "Option";
  const currentOptions = Object.values(question.questionOptions);
  if (currentOptions.includes("Option")) {
    let inc = 1;
    while (currentOptions.includes("Option " + inc)) inc++;
    optionName = "Option " + inc;
  }

  question.questionOptions[newQuestionOptionId] = optionName;
  setForm(form);
  let updForm = await getFormById(formId);
  while (
    !updForm.formQuestions[
      form.formQuestions.findIndex((q: Question) => q.questionId === questionId)
    ].questionOptions[newQuestionOptionId]
  ) {
    updForm = await getFormById(formId);
  }
  return [optionName, newQuestionOptionId];
};

export const deleteFormById = async (formId: string) => {
  let currentFormsList = await JSON.parse(
    localStorage.getItem("formsList") ?? "{}"
  );
  currentFormsList && delete currentFormsList[formId];
  localStorage.setItem("formsList", JSON.stringify(currentFormsList));
  localStorage.removeItem(formId);
  return currentFormsList;
};

export const doesTheFormExistById = async (formId: string) => {
  const formsList = await getFormsList();
  return !!formsList[formId];
};
