import React from "react";
import "./Checkbox.css"
export const Checkbox = () => {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="flexCheckDisabled"
          disabled=""
        />
        
      </div>
    </>
  );
};
