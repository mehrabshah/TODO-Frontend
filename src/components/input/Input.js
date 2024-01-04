import React from 'react'
import "./input.css"
export const Input = ({type,placeholder,value,onChange}) => {
  return (
    <>
          <input
              type={type}
              className="form-control"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
    </>
  )
}
