import { FieldError, UseFormRegister } from "react-hook-form";
import { IQuestionnaire } from "./questionnaire.types";

export interface IAuthForm {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  role: UserRoleEnum;
  questionnaire: IQuestionnaire;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface IAuthFields {
  register: UseFormRegister<IAuthForm>;
  errors: {
    email?: FieldError;
    password?: FieldError;
  };
  isLoginForm: boolean;
}

export enum UserRoleEnum {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string };
