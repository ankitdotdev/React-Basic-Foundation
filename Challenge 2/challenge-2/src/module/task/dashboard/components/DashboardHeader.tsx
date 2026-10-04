import task from "../task.dashboard.module.css";
import { KPIS } from "../constants/DashboardKpis";
import KpiSection from "./KpiSection";

const DashboardHeader = () => {
  return (
    <div className={`${task.container}`}>
      <h2>My Tasks</h2>
      <p>Manage your tasks and track your progress</p>
      <KpiSection kpi={KPIS} />
    </div>
  );
};

export default DashboardHeader;
