import { useEffect, useState } from "react";
import Table from "../../../../component/table/Table";
import { TaskConstants, TasksColumns } from "../constants/Tasks.constants";

import task from "../task.dashboard.module.css";
import TaskForm from "./TaskForm";
import type { Tasks } from "../types/Tasks";

const TaskSection = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<Tasks[]>(TaskConstants);
  useEffect(() => {
    console.log("The value of the show is", tasks);
  }, [tasks]);
  return (
    <>
      {show && (
        <div>
          <TaskForm
            onClick={(task) => {
              setTasks((prev) => [
                ...prev,
                {
                  ...task,
                  id: prev.length + 1,
                },
              ]);
              setShow(false);
            }}
          />
        </div>
      )}
      <div className={`${task.tableSection}`}>
        <div className={`${task.taskHeader}`}>
          <span>Task</span>
          <button onClick={() => setShow((prev) => !prev)}>+ Add Task</button>
        </div>
        <div className={`${task.tableArea}`}>
          <Table columnsDef={TasksColumns} data={tasks} />
        </div>
      </div>
    </>
  );
};

export default TaskSection;
