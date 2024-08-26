import { forwardRef } from "react";
import styles from "./Field.module.scss";
import { FieldError } from "react-hook-form";

interface IField {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant?: string;
  state?: "error" | "success";
  disabled?: boolean;
  type?: string;
  isNumber?: boolean;
  error?: FieldError;
}

export const Field = forwardRef<HTMLInputElement, IField>(
  (
    {
      id,
      label,
      extra,
      placeholder,
      state,
      disabled,
      isNumber,
      type,
      error,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={`${styles.field} ${extra} space-y-1`}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          id={id}
          {...rest}
        />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = "field";
