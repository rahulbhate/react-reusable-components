import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordianSection from './AccordianSection';
const Accordian = (props) => {
  const { children, label, data } = props;
  const [toggle, setToggle] = useState(false);
  const [contents, setContents] = useState(data);
  //console.log(props);

  const clickToggle = (bool) => {
    setToggle(!toggle);

    console.log(bool, contents);
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
