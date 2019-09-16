import { useState } from 'react';
import React from 'react';
import Tab from './Tab';
const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(props.children[0].props.label);
  console.log(activeTab);
  const { children } = props;
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };
  return (
    <div>
      <ul className="nav nav-tabs">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ul>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
