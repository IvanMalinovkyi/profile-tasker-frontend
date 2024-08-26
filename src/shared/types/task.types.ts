export interface ITask {
  id: string;
  createdAt?: string;
  name: string;
  isCompleted?: boolean;
}

export type TypeTaskFormState = Partial<Omit<ITask, "id" | "createdAt">>;
