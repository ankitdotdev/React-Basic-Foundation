import LayoutWrapper from "./component/layout/layout";
import TaskDashboard from "./module/task/dashboard/TaskDashboard";
import { Toast } from "radix-ui";

const App = () => {
  return (
    <Toast.Provider>
      <LayoutWrapper>
        <TaskDashboard />
      </LayoutWrapper>
    </Toast.Provider>
  );
};

export default App;
