import React from 'react';

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={
        props.type === 'primary' ? 'btn btn-danger' : 'btn btn-secondary'
      }
      {...props}
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
