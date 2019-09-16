import React from 'react';

const ProfileCard = (props) => {
  return (
    <div>
      {props.options.map((option, index) => {
        return (
          <>
            <img src={option.imageSrc} alt={index} />
            <h3 key={option.title} value={option.title} label={option.title}>
              {option.title}
            </h3>
            <p>{option.description}</p>
          </>
        );
      })}
    </div>
  );
};

export default ProfileCard;
