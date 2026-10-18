import { useState, type ChangeEvent } from "react";

interface InputFieldProps {
  type: "text" | "textarea";
  label: string;
  name: string;
  onChange: (key: string, e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
import styles from "./InputField.module.css";
const InputField: React.FC<InputFieldProps> = ({
  type,
  label,
  onChange,
  name,
  placeholder,
}) => {
  const [field, setField] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setField(value);
    onChange(name, e);
  };

  return (
    <div className={`${styles.inputContainer}`}>
      <label>{label}</label>
      <input
        type={type}
        id={field}
        value={field}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder || `Enter ${label}`}
        className={`${styles.inputField}`}
      />
    </div>
  );
};

export default InputField;
