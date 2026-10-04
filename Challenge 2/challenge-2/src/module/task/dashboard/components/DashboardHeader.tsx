import React from "react";
import task from "../task.dashboard.module.css";
import { KPIS } from "../constants/DashboardKpis";
import KpiCard from "./KpiCard";

const DashboardHeader = () => {
  return (
    <div className={`${task.container}`}>
      <h2>My Tasks</h2>
      <p>Manage your tasks and track your progress</p>
      <div className={`${task.kpis}`}>
        {KPIS.map((data, i) => (
          <KpiCard key={i} title={data.title} value={data.value} />
        ))}
      </div>
    </div>
  );
};

export default DashboardHeader;
