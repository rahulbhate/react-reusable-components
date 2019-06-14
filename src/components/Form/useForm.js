import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({
    skills: [],
  });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleCheckBox = (event) => {
    const newSelection = event.target.value;
    let newSelectionArray;
    console.log(newSelection);
    if (values.skills.indexOf(newSelection) > -1) {
      newSelectionArray = values.skills.filter((s) => s !== newSelection);
    } else {
      newSelectionArray = [...values.skills, newSelection];
    }
    console.log(newSelectionArray);
    setValues((values) => ({
      ...values,
      skills: newSelectionArray,
    }));
  };
  const handleClearForm = (event) => {
    event.preventDefault();
    alert('handleClearForm');
    setValues({});
  };
  return {
    handleChange,
    handleCheckBox,
    handleSubmit,
    values,
    handleClearForm,
  };
};

export default useForm;
