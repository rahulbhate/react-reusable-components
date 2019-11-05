import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';
const TextInput = ({htmlId, name, label, type="text", required=false, 
onChange, placeholder, value, error, children, ...props}) => {
  return (
      <div style={{marginBottom: 16}}>
      <Label htmlFor={htmlId} label={label} required={required} />
      <input 
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && {border:'solid 1px red'}}
        {...props}
      /> {children}
      { error && <div className="error"style={{color:'red'}}> {error}</div>}
      </div>
    
  );
};
TextInput.protoTypes = {
    htmlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text','number','password']),
    children: PropTypes.node
}

export default TextInput;

