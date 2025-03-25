import { useState } from "react";
import "../styles/tasks.css";
function TaskBox({ task, setTasks }) {
  const [isShow, setIsShow] = useState(false);
  const handleChecked = (e) => {
    setTasks((prev) => {
      return prev.map((element) => {
        if (element.value === task.value) {
          return {
            ...element,
            isCompleted: !element.isCompleted,
          };
        } else {
          return element;
        }
      });
    });
  };
  const handledelete = () => {
    if (confirm("Are you sure?")) {
      setTasks((prev) => {
        return prev.filter((element) => element.value !== task.value);
      });
    }
  };

  return (
    <div className="task-item">
      <p
        style={{
          wordBreak: "break-word",
        }}
      >
        {isShow ? task.value : task.value.slice(0, 20)}
        <span
          style={{
            color: "#3680ef",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => {
            setIsShow((prev) => !prev);
          }}
        >
          {task.value?.length > 20 ? isShow ? " hide" : " show" : <></>}
        </span>
      </p>
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignSelf: "end",
          justifyContent: "center",
        }}
      >
        {/* {task.isCompleted ? (
          <img src="logo.svg" onClick={handleChecked} />
        ) : ( */}
        <input
          className="task-checkbox"
          type="checkbox"
          checked={task.isCompleted || false}
          onChange={handleChecked}
        ></input>
        {/* )} */}

        <div
          style={{
            borderRadius: "6px",
            border: "2px solid red",
            display: "flex",
            width: "25px",
            height: "25px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none",
            fontWeight: "bold",
          }}
          onClick={handledelete}
        >
          X
        </div>
      </div>
    </div>
  );
}
export default TaskBox;
