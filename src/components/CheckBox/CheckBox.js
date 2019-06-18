import React from 'react';

const CheckBox = (props) => {
  return (
    <div className="form-group">
      <label className="form-label">{props.title}</label>
      <div className="checkbox">
        {props.options.map((option) => {
          return (
            <label key={option} className="checkbox-inline">
              <input
                name={props.name}
                value={option}
                type="checkbox"
                {...props}
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
