// AddTask.js
import React, { useEffect, useState } from "react";
import "./Todo.css";
import { getCurrentDateTime } from "../../utils/Date";
import taskService from "../../services/TODO";
import { SingleTask } from "../singleTask/SingleTask";
import ListIcon from "../../icons/ListIcon";
import ChevronIcon from "../../icons/ChevronIcon";
import { AddTask } from "../addTask/AddTask";
import { formatDateTime } from '../../utils/DateConversion';

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [displayList, setDisplayList] = useState(false);
  useEffect(() => {
    fetchTask();
  }, []);

  const [taskValue, setTaskValue] = useState({
    name: "",
    status: "Pending",
    date: "",
  });

  const handleInputChange = (event) => {
    
    const { name, value } = event.target;

    setTaskValue((prevTaskValue) => ({
      ...prevTaskValue,
      [name]: value,
    }));
  };
  const onChevron = () => {
    setDisplayList((prev) => !prev);
  };

  const addTask = async () => {
    try {
      
      const currentDateTime = getCurrentDateTime();
      const newTask = { ...taskValue, date: currentDateTime };
      await taskService.addTask(newTask);
      fetchTask();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };
  const fetchTask = async () => {
    try {
      const tasksData = await taskService.fetchTasks();
      

     
      const updatedTasksData = tasksData.map((item) => {
        const formattedDate = formatDateTime(item.date);
        return {
          ...item,
          date: formattedDate,
        };
      })
      
      setTasks(updatedTasksData);

      console.log(tasksData)
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchTask();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const updateTask = async (id, data) => {
    try {
      await taskService.updateTaskStatus(id, data);
      fetchTask();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <>
      {" "}
      {/* Add Tasks */}
      <AddTask
        onChange={handleInputChange}
        value={taskValue.name}
        addTask={addTask}
      />
      <div className="select">
        <div className="select-wrapper">
          <div className="left">
            <div className="select-icon-wrapper">
              <ListIcon />
            </div>
            <span className="left-heading ms-2">Your todos</span>
          </div>
          <div className="chevron-wrapper" onClick={onChevron}>
            <ChevronIcon />
          </div>
        </div>
      </div>
      {/* Displaying Tasks */}
      {displayList ? (
        <ul className="task-list mt-2 ps-0 pb-3">
          {tasks.map((item, index) => (
            <SingleTask
              key={index}
              item={item}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
};
