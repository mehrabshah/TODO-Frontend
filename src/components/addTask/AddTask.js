// AddTask.js
import React, { useEffect, useState } from "react";
import "./AddTask.css";
import { Input } from "../input/Input";
import PlusIcon from "../../icons/PlusIcon";
import { getCurrentDateTime } from "../../utils/Date";
import taskService from "../../services/TODO";
import { TaskList } from "../taskList/TaskList";

export const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState({
    name: "",
    status: "Not Completed",
    date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTaskValue((prevTaskValue) => ({
      ...prevTaskValue,
      [name]: value,
    }));

    console.log(taskValue);
  };

  const addTask = async () => {
    try {
      const currentDateTime = getCurrentDateTime();
      const newTask = { ...taskValue, date: currentDateTime };

      await taskService.addTask(newTask);
      
         
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <>
      {" "}
      <div className="add-task">
        <div className="mb-2 input-group">
          <Input
            type="text"
            name="name"
            placeholder="Add new task"
            onChange={handleInputChange}
            value={taskValue.name}
          />

          <div className="input-icon-wrapper" onClick={addTask}>
            <PlusIcon className="input-icon" />
          </div>
        </div>
      </div>
      
       <TaskList/>


    </>
  );
};
