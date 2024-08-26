import { ITask } from "@/shared/types/task.types";
import { IQuestionnaire } from "@/shared/types/questionnaire.types";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface IUser {
  id: string;
  createdAt: number;
  updatedAt: number;
  email: string;
  password: string;
  name: string;
  role: UserRole;
  specialty: string;
  description: string;
  tasks: ITask[];
  questionnaire: IQuestionnaire[];
}

export interface IUserEdit extends Pick<IUser, "name" | "email" | "role"> {}
