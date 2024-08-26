"use client";

import { IAuthForm } from "@/shared/types/auth.types";
import Heading from "@/shared/ui/Heading";
import { Button } from "@/shared/ui/buttons/Button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Auth.module.scss";
import AuthFields from "./AuthFields";
import { useAuthMutation } from "@/shared/hooks/useAuthMutation";

export default function Auth() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<IAuthForm>({
    mode: "onChange",
  });

  const [isLoginForm, setIsLoginForm] = useState(true);

  const { mutate } = useAuthMutation(isLoginForm, reset);

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-box"]}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["auth-form"]}>
          <Heading title={isLoginForm ? "Вхід" : "Регістрація"} />
          <AuthFields
            register={register}
            errors={errors}
            isLoginForm={isLoginForm}
          />
          <div className={styles["auth-button-container"]}>
            <Button variant="primary">
              {isLoginForm ? "Увійти" : "Зареєструватись"}
            </Button>
          </div>
          <div className={styles["auth__toggle-account"]}>
            {isLoginForm ? "Немає аккаунта?" : "Є аккаунт?"}

            <Button
              type="button"
              variant="danger"
              onClick={() => {
                setIsLoginForm(isLoginForm ? false : true);
              }}>
              {isLoginForm ? "Створити аккаунт" : "Увійти в аккаунт"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
