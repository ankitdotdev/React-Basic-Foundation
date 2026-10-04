import React from "react";
import type { TaskKPI } from "../types/Dashboard.types";
interface KpiSectionProps {
  kpi: TaskKPI[];
}
import task from "../task.dashboard.module.css";
import KpiCard from "./KpiCard";

const KpiSection: React.FC<KpiSectionProps> = ({ kpi }) => {
  return (
    <div className={`${task.kpis}`}>
      {kpi.map((data, i) => (
        <KpiCard key={i} title={data.title} value={data.value} />
      ))}
    </div>
  );
};

export default KpiSection;
