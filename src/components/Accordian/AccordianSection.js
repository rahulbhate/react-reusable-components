import React from 'react';
const AccordianSection = (props) => {
  // Desstructuring Props... from Accordian Component...
  const { label, children, clickToggle, toggle } = props;
  function onClickToggle() {
    clickToggle(true);
  }
  return (
    <div style={{ background: '#f1f1f1', padding: '5px 10px' }}>
      <div style={{ cursor: 'pointer' }} onClick={onClickToggle}>
        {label}
        <div style={{ float: 'right' }}>
          {toggle && <span>&#9650;</span>}
          {!toggle && <span>&#9660;</span>}
        </div>
      </div>
      {toggle && (
        <div
          style={{
            background: 'white',
            marginTop: 10,
            padding: '10px 20px',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordianSection;
