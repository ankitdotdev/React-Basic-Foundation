import React from "react";
interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

import styles from "./Button.module.css";
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  icon,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
    >
      {icon && icon}
      {label}
    </button>
  );
};

export default Button;
