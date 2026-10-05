import Table from "../../../../component/table/Table";
import { TaskConstants, TasksColumns } from "../constants/Tasks.constants";

import task from "../task.dashboard.module.css";

const TaskSection = () => {
  return (
    <div className={`${task.tableSection}`}>
      <div className={`${task.taskHeader}`}>
        <span>Task</span>
        <button>+ Add Task</button>
      </div>
      <div className={`${task.tableArea}`}>
        <Table columnsDef={TasksColumns} data={TaskConstants} />
      </div>
    </div>
  );
};

export default TaskSection;
