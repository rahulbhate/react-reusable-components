import React from 'react';
const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-input"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        placeholder={props.placeholder}
        required
        {...props}
      />
    </div>
  );
};

export default Input;
