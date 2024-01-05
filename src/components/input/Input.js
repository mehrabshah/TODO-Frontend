
import React from 'react';
import './input.css';

export const Input = ({ type, placeholder, value, onChange,name }) => {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
