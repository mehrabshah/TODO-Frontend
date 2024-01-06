import React from "react";
import PlusIcon from "../../icons/PlusIcon";
import "./AddTask.css";
export const AddTask = ({ onChange, value,addTask }) => {
  return (
    <div className="add-task">
      <div className="mb-2 input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={value}
          name="name"
          onChange={onChange}
        />

        <div className="input-icon-wrapper" onClick={addTask}>
          <PlusIcon className="input-icon" />
        </div>
      </div>
    </div>
  );
};
