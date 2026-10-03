import LayoutWrapper from "./components/LayoutWrapper/layoutWrapper";
import content from "./App.module.css";
const App = () => {
  return (
    <LayoutWrapper>
      <div className={`${content.container}`}>
        {/* Header Section */}
        <div className={`${content.header}`}>
          <h2>Good Morning</h2>
          <h3>Here's your overview</h3>
        </div>
        {/* KPI's Section */}
        <div className={`${content.kpis}`}>
          <ul className={`${content.kpisSection}`}>
            <li className={`${content.kpiCard}`}>
              <p>Projects</p>
              <p>12</p>
            </li>
            <li className={`${content.kpiCard}`}>
              <p>Tasks</p>
              <p>38</p>
            </li>
            <li className={`${content.kpiCard}`}>
              <p>Hours</p>
              <p>126</p>
            </li>
          </ul>
        </div>
        {/* Recent Projects Section */}
        <div className={`${content.recent}`}>
          <h3>Recent Projects</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Task</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>XYZ</td>
                <td>Backend</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Ecommerce</td>
                <td>Frontend</td>
                <td>Done</td>
              </tr>

              <tr>
                <td>Analytics</td>
                <td>Fullstack</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default App;
