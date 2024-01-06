import React, { useState } from "react";
import "./SingleTask.css";
import CheckCircleIcon from "../../icons/CheckCircleIcon";
import DotIcon from "../../icons/DotIcon";

export const SingleTask = ({ item, deleteTask, updateTask }) => {
  const [displayTask, setDisplayTask] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [updateValue, setUpdateValue] = useState({
    status: "Pending",
  });

  const onDotIcon = () => {
    setDisplayTask((prev) => !prev);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    const status = event.target.checked ? "Completed" : " Pending";
    setUpdateValue((prevTaskValue) => ({
      ...prevTaskValue,
      status: status,
    }));
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
                onClick={() => updateTask(item._id, updateValue)}
              />
            </div>

            <span className="single-task-heading ms-2">{item.name}</span>
          </div>
          <div className="dot-icon-wrapper" onClick={onDotIcon}>
            <DotIcon />
          </div>
        </div>
      </div>
      {displayTask ? (
        <div className="task-detail text-start">
          <div className="task-detail-wrapper">
            {" "}
            <li className="">
              Completed:<span>{item.status}</span>
            </li>
            <li>
              Created At:<span>{item.date}</span>
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
