import React from "react";
import Table from "../../../../component/table/Table";
import type { Tasks } from "../types/Tasks";

interface TaskSectionProps {
  tasks: Tasks[];
  taskColumns: any[];
}
import task from "../task.dashboard.module.css";

const TaskSection: React.FC<TaskSectionProps> = ({ tasks, taskColumns }) => {
  return (
    <div className={`${task.tableSection}`}>
      <div className={`${task.taskHeader}`}>
        <span>Task</span>
        <button>+ Add Task</button>
      </div>
      <div className={`${task.tableArea}`}>
        <Table columnsDef={taskColumns} data={tasks} />
      </div>
    </div>
  );
};

export default TaskSection;
