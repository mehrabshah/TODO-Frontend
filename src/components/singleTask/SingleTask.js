import React, { useState } from "react";
import "./SingleTask.css";
import CheckCircleIcon from "../../icons/CheckCircleIcon";
import DotIcon from "../../icons/DotIcon";

export const SingleTask = ({ item, deleteTask, updateTask }) => {

  const check=item.status==="Pending"? false : true;

  const [displayTask, setDisplayTask] = useState(false);

  const [isChecked, setIsChecked] = useState(check);

  const onDotIcon = () => {
    setDisplayTask((prev) => !prev);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
   
  };

  return (
    <>
      <div className="single-task">
        <div className="single-task-wrapper">
          <div className="left">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDisabled"
                disabled=""
                checked={isChecked}
                onChange={handleCheckboxChange}
                onClick={() => updateTask(item._id, isChecked)}
              />
            </div>

            <span className="single-task-heading ms-2">{item.name}</span>
          </div>
          <div className="dot-icon-wrapper" onClick={onDotIcon}>
            <DotIcon />
          </div>
        </div>
      </div>
      {/* Task Details */}
      {displayTask ? (
        <div className="task-detail text-start">
          <div className="task-detail-wrapper">
            {" "}
            <li className="">
            <span className="heading me-2"> Completed:</span>{item.status}
            </li>
            <li>
            <span className="heading me-2">Created At:</span>{item.date}
            </li>
            <button
              className="btn-delete mt-2"
              onClick={() => deleteTask(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
