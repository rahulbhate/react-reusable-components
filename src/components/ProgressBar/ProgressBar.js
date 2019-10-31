import React from 'react';
import PropTypes from 'prop-types'
const ProgressBar = (props) => {
    const getColor = (percentage) =>{
        if(percentage === 100) return 'green';
        return percentage > 50 ? 'lightgreen': 'red'; 
    }
    const getWidth = () => {
        return parseInt(props.width * (props.percentage / 100), 10);
    }
    const { percentage, width, height} = props;
  return (
    <div style={{ border: 'solid 1px lightgray', width: width}}>
        <div style={{ width: getWidth(),
        height, 
        backgroundColor: getColor(percentage)}}>
        </div>
    </div>
  );
};
ProgressBar.protoTypes = {
    percentage: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number
}
ProgressBar.defaultProps = {
    height: 5
}
export default ProgressBar;
