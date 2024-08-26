import { IAuthFields } from "@/shared/types/auth.types";
import { Field } from "@/shared/ui/fields/Field";
import styles from "./Auth.module.scss";

export default function AuthFields({ register, errors }: IAuthFields) {
  return (
    <>
      <Field
        id="email"
        label="Пошта"
        placeholder="Введіть пошту"
        type="email"
        extra={styles["auth-field"]}
        error={errors.email}
        {...register("email", { required: "Поле обов'язкове" })}
      />
      <Field
        id="password"
        label="Пароль"
        placeholder="Введіть пароль"
        type="password"
        extra={styles["auth-field"]}
        error={errors.password}
        {...register("password", {
          required: "Поле обов'язкове",
          minLength: {
            value: 6,
            message: "Пароль має містити не менше 6 символів",
          },
        })}
      />
    </>
  );
}
