import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({
    skills: [],
  });
  const [genderOptions, SetGenderOptions] = useState([
    'Male',
    'Female',
    'Others',
  ]);
  const [skillOptions, setSkillOptions] = useState([
    'Programming',
    'Development',
    'Design',
    'Testing',
  ]);
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

  const handleRadioBox = (event) => {
    const selectedOption = event.target.title;
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: selectedOption,
    }));
  };
  const handleClearForm = (event) => {
    event.preventDefault();
    setValues({ value: '', skills: '' });
    console.log(values);
  };
  return {
    handleChange,
    handleCheckBox,
    handleSubmit,
    handleRadioBox,
    values,
    genderOptions,
    skillOptions,
    handleClearForm,
  };
};

export default useForm;
