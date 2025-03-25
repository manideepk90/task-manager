import TaskBox from "./TaskItem";
import React from "react";
import "../styles/tasks.css";
function Status({ heading, tasks, setTasks, icon = <></> }) {
  return (
    <div className="task-container">
      <div className="task-heading">
        {icon}
        <h2>{heading}</h2>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <TaskBox task={task} setTasks={setTasks} key={index} />
        ))}
      </div>
    </div>
  );
}
export default Status;
