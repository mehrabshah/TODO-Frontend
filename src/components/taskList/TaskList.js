import "./TaskList.css";
import ChevronIcon from "../../icons/ChevronIcon";
import ListIcon from "../../icons/ListIcon";
import { SingleTask } from "../singleTask/SingleTask";
import React, { useState, useEffect } from "react";
import taskService from "./../../services/TODO";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [displayList, setDisplayList] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const tasksData = await taskService.fetchTasks();
      setTasks(tasksData);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const onChevron = () => {
    setDisplayList((prev) => !prev);
  };
  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <>
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
      {displayList ? (
        <ul className="task-list mt-2 ps-0 pb-3">
          {tasks.map((item, index) => (
            <SingleTask key={index} item={item} onDelete={deleteTask} />
          ))}
        </ul>
      ) : null}
    </>
  );
};
