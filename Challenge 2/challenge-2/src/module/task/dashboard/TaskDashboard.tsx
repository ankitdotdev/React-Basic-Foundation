import DashboardHeader from "./components/DashboardHeader";
import TaskSection from "./components/TaskSection";
import { TaskConstants, TasksColumns } from "./constants/Tasks.constants";

const TaskDashboard = () => {
  return (
    <div>
      {/* Task Kpi Section */}
      <DashboardHeader />

      {/* Task List Section */}
      <TaskSection tasks={TaskConstants} taskColumns={TasksColumns} />
    </div>
  );
};

export default TaskDashboard;
