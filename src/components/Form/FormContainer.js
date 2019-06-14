import React, { useState } from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import Select from '../Select/Select';
import useForm from './useForm';

const FormContainer = () => {
  const {
    values,
    handleCheckBox,
    handleClearForm,
    handleChange,
    handleSubmit,
  } = useForm(login);
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

  function login() {
    console.log(values);
  }

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <Input
        inputType={'text'}
        title={'Full Name'}
        id={'name'}
        name={'name'}
        value={values.name}
        placeholder={'Enter your name'}
        onChange={handleChange}
      />
      <Input
        inputType={'email'}
        title={'Email'}
        id={'email'}
        name={'email'}
        value={values.email}
        placeholder={'Enter your email'}
        onChange={handleChange}
      />
      <Input
        inputType={'password'}
        title={'Password'}
        id={'password'}
        name={'password'}
        value={values.password}
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
      <Input
        inputType={'number'}
        title={'Age'}
        id={'age'}
        name={'age'}
        value={values.age}
        placeholder={'Enter your age'}
        onChange={handleChange}
      />
      <Select
        title={'Gender'}
        name={'gender'}
        options={genderOptions}
        value={values.gender}
        placeholder={'Select Gender'}
        onChange={handleChange}
      />
      <CheckBox
        title={'Skills'}
        name={'skills'}
        options={skillOptions}
        selectedoptions={values.skills}
        onChange={handleCheckBox}
      />
      <TextArea
        title={'About you.'}
        rows={10}
        name={'currentPetInfo'}
        value={values.currentPetInfo}
        onChange={handleChange}
        placeholder={'Describe your past experience and skills'}
      />
      <Button type={'primary'} title={'Login'} />
      <Button type={'secondary'} title={'Clear'} action={handleClearForm} />
    </form>
  );
};

export default FormContainer;
