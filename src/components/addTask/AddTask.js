import "./AddTask.css";
import { Input } from "../input/Input";
import React, { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";
export const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");
  const handleInputChange = (event) => {
    setTaskValue(event.target.value);
  };
  const addTask = () => {
    console.log("mehrab");
  };

  return (
    <>
      <div className="add-task">
          <div className="mb-3 input-group">
            <Input
              type="text"
              placeholder="Add new task"
              onChange={handleInputChange}
              value={taskValue}
            />

           <div className="input-icon-wrapper" onClick={addTask}>
            <PlusIcon className="input-icon" />
            </div>
          </div>
      </div>
    </>
  );
};
