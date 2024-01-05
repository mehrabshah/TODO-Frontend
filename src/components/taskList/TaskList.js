import React, { useState } from "react";
import "./TaskList.css";
import ChevronIcon from "../../icons/ChevronIcon";
import ListIcon from "../../icons/ListIcon";
import { SingleTask } from "../singleTask/SingleTask";
const dataArray = [
  { name: "Task1", date: "2024-01-05", status: "Active" },
  { name: "Task2", date: "2023-12-20", status: "Inactive" },
  { name: "Task3", date: "2024-01-02", status: "Pending" },
  { name: "Task3", date: "2024-01-02", status: "Pending" },
  // Add more objects as needed
];

export const TaskList = () => {
  const [displayList, setDisplayList] = useState(false);
  const onChevron = () => {
    setDisplayList((prev) => !prev);
  };
  const  deleteTask=()=>{

  }

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
          {dataArray.map((item, index) => (
            <SingleTask key={index} item={item}  onDelete={deleteTask} />
          ))}
        </ul>
      ) : null}
    </>
  );
};
