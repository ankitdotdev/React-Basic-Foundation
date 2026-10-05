import DashboardHeader from "./components/DashboardHeader";
import TaskSection from "./components/TaskSection";

const TaskDashboard = () => {
  return (
    <div>
      {/* Task Kpi Section */}
      <DashboardHeader />

      {/* Task List Section */}
      <TaskSection />
    </div>
  );
};

export default TaskDashboard;
