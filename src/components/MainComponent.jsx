import { useEffect, useState } from "react";
import Input from "./Input";
import Status from "./Status";
export default function MainComponent() {
  const [tasks, setTasks] = useState([]);
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("myTasks")) || []);
    setIsInit(true);
  }, []);

  useEffect(() => {
    if (isInit === true) {
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }, [tasks, isInit]);

  return (
    <>
      <Input tasks={tasks} setTasks={setTasks} />
      <div className="status-container">
        {tasks.length === 0 ? (
          <p
            style={{
              fontSize: "24px",
              fontWeight: "500",
              color: "green",
            }}
          >
            😁 No tasks
          </p>
        ) : (
          <>
            <Status
              heading={"Pending"}
              icon={<img src="pending.svg" alt="icon.svg" />}
              tasks={tasks.filter(
                (ele) => (ele.isCompleted || false) === false
              )}
              setTasks={setTasks}
            />
            <Status
              heading={"completed"}
              icon={<img src="logo.svg" alt="icon.svg" />}
              tasks={tasks.filter((ele) => ele.isCompleted === true)}
              setTasks={setTasks}
            />
          </>
        )}
      </div>
    </>
  );
}
