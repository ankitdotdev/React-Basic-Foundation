  import { useEffect, useState } from "react";
  import Table from "../../../../component/table/Table";
  import { TaskConstants, TasksColumns } from "../constants/Tasks.constants";

  import task from "../task.dashboard.module.css";
  import TaskForm from "./TaskForm";
  import type { Tasks } from "../types/Tasks";
  import { Toast } from "radix-ui";
  import { BiCross } from "react-icons/bi";
  import Button from "../../../../component/button/Button";
  import { FaPlus } from "react-icons/fa";

  const TaskSection = () => {
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [tasks, setTasks] = useState<Tasks[]>(TaskConstants);
    useEffect(() => {
      console.log("The value of the show is", tasks);
    }, [tasks]);

    const handleTasks = (task: Tasks) => {
      console.log("Task =>", task);
      if (
        !task.name.trim() ||
        !task.dueDate.trim() ||
        !task.priorty.trim() ||
        !task.status.trim()
      ) {
        return;
      }
      setTasks((prev) => [
        ...prev,
        {
          ...task,
          id: prev.length + 1,
        },
      ]);
      setShow(false);
      setShowToast(true);
    };
    return (
      <>
        <Toast.Root open={showToast} onOpenChange={setShowToast} duration={3000}>
          <Toast.Title>Task Added Successfully!</Toast.Title>
          <Toast.Description>
            Your Task has been added successfully
          </Toast.Description>
          <Toast.Close>
            <BiCross />
          </Toast.Close>
        </Toast.Root>

        {show && (
          <div className={`${task.modelBackdrop}`}>
            <div className={`${task.modelContent}`}>
              <TaskForm
                onClick={(task) => {
                  handleTasks(task);
                }}
                onClose={() => setShow((prev) => !prev)}
              />
            </div>
          </div>
        )}
        <div className={`${task.tableSection}`}>
          <div className={`${task.taskHeader}`}>
            <span>List of Tasks</span>
            <Button
              label="Add Task"
              icon={<FaPlus size={14} />}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
          <div className={`${task.tableArea}`}>
            <Table columnsDef={TasksColumns} data={tasks} />
          </div>
        </div>
      </>
    );
  };

  export default TaskSection;
