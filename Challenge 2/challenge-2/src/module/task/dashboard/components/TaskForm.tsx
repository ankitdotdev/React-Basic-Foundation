import React, { useState } from "react";

import taskForm from "./TaskForm.module.css";
import type { Tasks } from "../types/Tasks";

interface TasFormProps {
  onClick: (tasks: Tasks) => void;
}

const TaskForm: React.FC<TasFormProps> = ({ onClick }) => {
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
      <form onSubmit={handleSubmit}>
        <div>
          <div className={`${taskForm.fields}`}>
            <label htmlFor="">Task</label>
            <input
              type="text"
              id="name"
              value={task.name}
              onChange={(e) => handleChange("name", e)}
              className={`${taskForm.inputField}`}
            />
          </div>

          <div className={`${taskForm.fields}`}>
            <label htmlFor="">Priorty</label>
            <input
              type="text"
              id="priorty"
              value={task.priorty}
              onChange={(e) => handleChange("priorty", e)}
              className={`${taskForm.inputField}`}
            />
          </div>

          <div className={`${taskForm.fields}`}>
            <label htmlFor="">Status</label>
            <input
              type="text"
              id="status"
              value={task.status}
              onChange={(e) => handleChange("status", e)}
              className={`${taskForm.inputField}`}
            />
          </div>

          <div className={`${taskForm.fields}`}>
            <label htmlFor="">Due Date</label>
            <input
              type="text"
              id="status"
              value={task.dueDate}
              onChange={(e) => handleChange("dueDate", e)}
              className={`${taskForm.inputField}`}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
