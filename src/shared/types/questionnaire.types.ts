export interface IQuestionnaire {
  id: string;
  createdAt: number;
  updatedAt: number;
  name: string;
  profession: string;
  description: string;
}

export type TypeQuestionnaireFormState = Partial<
  Omit<IQuestionnaire, "id" | "createdAt" | "updatedAt">
>;
