import React from "react";
import LayoutWrapper from "./component/layout/layout";
import TaskDashboard from "./module/task/dashboard/TaskDashboard";

const App = () => {
  return (
    <LayoutWrapper>
      <TaskDashboard />
    </LayoutWrapper>
  );
};

export default App;
