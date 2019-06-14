import { useState, useEffect } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [arr, setArr] = useState([]);
  const [eveProp, setEveProp] = useState({});

  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setSubmit(true);
    callback();
  };

  const handleChange = (event) => {
    event.persist();

    if (event.target.checked) {
      setArr([...arr, event.target.value]);
    } else {
      const newArr = arr.filter((value) => value !== event.target.value);
      setArr(newArr);
    }

    setEveProp({
      name: event.target.name,
      value: event.target.value,
      type: event.target.type,
    });
  };

  useEffect(() => {
    if (submit) {
      const { name, type, value } = eveProp;
      setValues({
        ...values,
        [name]: type === 'checkbox' ? arr : value,
      });
    }
  }, [arr, eveProp, submit, values]);

  const handleClearForm = (event) => {
    event.preventDefault();
    setValues({});
  };
  return {
    handleChange,
    handleClearForm,
    handleSubmit,
    values,
  };
};

export default useForm;
