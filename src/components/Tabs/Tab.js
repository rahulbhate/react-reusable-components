import React from 'react';
const Tab = (props) => {
  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  };

  const { activeTab, label } = props;

  let className = 'tab-list-item';

  if (activeTab === label) {
    className += ' tab-list-active';
  }

  return (
    <li className="nav-item" onClick={onClick}>
      <a className="nav-link" href="#!">
        {label}
      </a>
    </li>
  );
};

export default Tab;
