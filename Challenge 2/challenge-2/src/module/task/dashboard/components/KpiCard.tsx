import React from "react";
import task from "../task.dashboard.module.css";
import type { TaskKPI } from "../types/Dashboard.types";

const KpiCard: React.FC<TaskKPI> = ({ title, value }) => {
  return (
    <div className={`${task.card}`}>
      <p className={`${task.cardTitle}`}>{title}</p>
      <span className={`${task.cardData}`}>{value}</span>
    </div>
  );
};

export default KpiCard;
