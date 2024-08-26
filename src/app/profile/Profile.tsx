"use client";

import styles from "./Profile.module.scss";
import Loader from "@/shared/ui/Loader";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUser } from "@/shared/types/auth.types";
import { Field } from "@/shared/ui/fields/Field";
import { Button } from "@/shared/ui/buttons/Button";
import Heading from "@/shared/ui/Heading";
import {
  useUpdateUser,
  useUserLoadInitialData,
} from "@/shared/hooks/useUserMutation";

export default function ProfilePage() {
  const { handleSubmit, register, reset } = useForm<IUser>({
    mode: "onChange",
  });

  useUserLoadInitialData(reset);

  const { mutate, isPending } = useUpdateUser();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    mutate(data);
  };

  return isPending ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.card}>
        <Heading title="Профіль" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <Field
              id="name"
              label="Ім'я та Прізвище"
              placeholder="Введіть ім'я та прізвище:"
              type="text"
              extra="mb-4"
              {...register("name", { required: "Поле обов'язкове" })}
            />
          </div>
          <div className={styles.formGroup}>
            <Field
              id="email"
              label="Email:"
              placeholder="Введіть ваш емейл"
              type="email"
              extra="mb-4"
              {...register("email", { required: "Поле обов'язкове" })}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              disabled={isPending}
              variant="secondary">
              Зберегти
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
