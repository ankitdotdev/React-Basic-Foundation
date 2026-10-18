import React from "react";
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

import styles from "./Button.module.css";
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
