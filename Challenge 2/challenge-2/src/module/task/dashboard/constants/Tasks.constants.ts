import type { Tasks } from "../types/Tasks";

export const TasksColumns: {
  label: string;
  key: string;
}[] = [
  {
    label: "Sr no",
    key: "id",
  },
  {
    label: "Task",
    key: "name",
  },
  {
    label: "Priorty",
    key: "priorty",
  },
  {
    label: "Status",
    key: "status",
  },
  {
    label: "Due",
    key: "dueDate",
  },
];

export const TaskConstants: Tasks[] = [
  {
    id: 1,
    name: "Fix Login Bug",
    priorty: "High",
    status: "Pending",
    dueDate: "Oct 4",
  },
  {
    id: 2,
    name: "Update dashboard",
    priorty: "Medium",
    status: "In Progress",
    dueDate: "Oct 5",
  },
  {
    id: 3,
    name: "API integration",
    priorty: "High",
    status: "Done",
    dueDate: "Oct 3",
  },
  {
    id: 4,
    name: "Fix mobile UI",
    priorty: "Low",
    status: "Pending",
    dueDate: "Oct 7",
  },
];
