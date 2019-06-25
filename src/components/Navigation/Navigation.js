import React from 'react';

const Navigation = ({ components }) => {
  return (
    <ul>
      {components.map((name) => {
        return (
          <li>
            <a href={`#${name}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
export default Navigation;
