import React, { useState } from "react";
import "./SingleTask.css";
import CheckCircleIcon from "../../icons/CheckCircleIcon";
import DotIcon from "../../icons/DotIcon";
export const SingleTask = ({ item,onDelete }) => {
  const [displayTask, setDisplayTask] = useState(false);
  const onDotIcon=()=>{
     setDisplayTask((prev)=>!prev)
  }

  return (
    <>
      <div className="single-task">
        <div className="single-task-wrapper">
          <div className="left">
            <div className="circle-icon-wrapper">
              <CheckCircleIcon />
            </div>
            <span className="single-task-heading ms-2">{item.name}</span>
          </div>
          <div className="dot-icon-wrapper" onClick={onDotIcon}>
            <DotIcon />
          </div>
        </div>
      </div>
    {displayTask ? <div className="task-detail text-start">
        <div className="task-detail-wrapper">
          {" "}
          <li className="">
            Completed:<span>{item.status}</span>
          </li>
          <li>
            Created At:<span>{item.date}</span>
          </li>
          <button className="btn-delete mt-2" onClick={() => onDelete(item._id)}>Delete</button>
        </div>
      </div>:null}
    </>
  );
};
