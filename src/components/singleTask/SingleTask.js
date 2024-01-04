import React from "react";
import "./SingleTask.css";
import CheckCircleIcon from "../../icons/CheckCircleIcon";
import DotIcon from "../../icons/DotIcon";
export const SingleTask = ({ item }) => {
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
          <div className="dot-icon-wrapper">
             <DotIcon/>
          </div>
        </div>
      </div>
    </>
  );
};
