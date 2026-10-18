import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import taskForm from "./TaskForm.module.css";
import type { Tasks } from "../types/Tasks";
import InputField from "../../../../component/input/InputField";
import Button from "../../../../component/button/Button";
import { FaPlus } from "react-icons/fa";

interface TasFormProps {
  onClick: (tasks: Tasks) => void;
  onClose: () => void;
}

const TaskForm: React.FC<TasFormProps> = ({ onClick, onClose }) => {
  const [task, setTasks] = useState<Tasks>({
    id: 0,
    name: "",
    priorty: "",
    status: "",
    dueDate: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task) {
      throw new Error("No task was provided");
    }
    console.log("The value logs in the handle submit are", task);
    onClick(task);
    setTasks({
      id: 0,
      name: "",
      priorty: "",
      status: "",
      dueDate: "",
    });
  };

  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    if (!value) {
    }
    setTasks((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  return (
    <div className={`${taskForm.container}`}>
      <h2>New Task</h2>
      <form onSubmit={handleSubmit} className={`${taskForm.formContainer}`}>
        <div className={`${taskForm.cross}`} onClick={() => onClose()}>
          <span className={`${taskForm.tooltip}`}>Close</span>
          <RxCross2 />
        </div>
        <div className={`${taskForm.formInputs}`}>
          <InputField
            label="Task"
            type="text"
            name={"name"}
            onChange={(field, e) => handleChange(field, e)}
          />

          <InputField
            label="Priorty"
            type="text"
            name={"priorty"}
            onChange={(field, e) => handleChange(field, e)}
          />

          <InputField
            label="Status"
            type="text"
            name={"status"}
            onChange={(field, e) => handleChange(field, e)}
          />

          <InputField
            label="Due Date"
            type="text"
            name={"dueDate"}
            onChange={(field, e) => handleChange(field, e)}
          />
        </div>
        <Button
          icon={<FaPlus />}
          type="submit"
          label="Add Task"
          variant="primary"
        />
      </form>
    </div>
  );
};

export default TaskForm;
