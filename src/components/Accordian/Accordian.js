import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordianSection from './AccordianSection';
const Accordian = (props) => {
  const { children, label } = props;
  const [toggle, setToggle] = useState(false);

  const clickToggle = (bool) => {
    setToggle(!toggle);
    console.log(bool);
  };
  return (
    <div style={{ borderBottom: '1px solid #f1f1f1' }}>
      <AccordianSection label={label} clickToggle={clickToggle} toggle={toggle}>
        {children}
      </AccordianSection>
    </div>
  );
};
Accordian.defaultProps = {
  allowMultipleOpen: false,
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Accordian;
