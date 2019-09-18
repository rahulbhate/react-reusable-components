import React from 'react';

const ProfileCard = (props) => {
  const keys = props.options.length > 0 ? Object.keys(props.options[0]) : [];

  console.log(keys);
  return (
    <div className="row">
      {props.options.map((option, index) => {
        console.log(index);
        return (
          <>
            <div className="col-sm-4">
              <img src={option.imageSrc} alt={index} />
              <h3 key={option.title} value={option.title} label={option.title}>
                {option.title}
              </h3>
              <p>{option.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProfileCard;
