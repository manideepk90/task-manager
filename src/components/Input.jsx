import { useState } from "react";

function Input({ tasks, setTasks }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handlePress = () => {
    if (value.trim() === "") {
      setError("Data cannot be empty")
      return;
    }
    let isExists = tasks.some((element) => element.value === value);
    let payload = {
      value: value.trim(),
      isCompleted: false,
    };

    if (!isExists) {
      setTasks((prev) => {
        return [...prev, payload];
      });
      setValue("");
    } else {
      setError("Already Exists");
    }
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          value={value}
          placeholder="Enter task name..."
          onChange={(e) => {
            setValue(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlePress()
            }
          }}
        />
        <button onClick={handlePress}>Add Task</button>
      </div>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "red",
        }}
      >
        {error}
      </p>
    </>
  );
}
export default Input;
