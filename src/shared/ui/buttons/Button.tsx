import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type UiButtonVariant = "primary" | "secondary" | "outlined" | "danger";

export type UiButtonProps = {
  variant: UiButtonVariant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  ...rest
}: UiButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
        [styles.outlined]: variant === "outlined",
        [styles.danger]: variant === "danger",
      })}
      {...rest}>
      {children}
    </button>
  );
}
