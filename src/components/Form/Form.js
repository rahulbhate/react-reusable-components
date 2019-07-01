import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import CheckBox from '../CheckBox/CheckBox';
import Button from '../Button/Button';
import Select from '../Select/Select';
import useForm from './useForm';

const Form = () => {
  const {
    values,
    handleCheckBox,
    genderOptions,
    skillOptions,
    handleClearForm,
    handleChange,
    handleRadioBox,
    handleSubmit,
  } = useForm(login);

  function login() {
    console.log(values);
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
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
      <Input
        inputType={'date'}
        title={'date'}
        id={'date'}
        name={'date'}
        value={values.date}
        placeholder={'Add Date'}
        onChange={handleChange}
      />
      <Input
        inputType={'file'}
        title={'Choose File'}
        id={'file'}
        name={'file'}
        value={values.file}
        multiple
        onChange={handleChange}
      />
      <label>Are You Australian Citizen?</label>
      <Input
        inputType={'radio'}
        title={'YES'}
        id={'citizen'}
        name={'citizen'}
        value={values.citizen}
        onChange={handleRadioBox}
      />

      <Input
        inputType={'radio'}
        title={'NO'}
        id={'citizen'}
        name={'citizen'}
        value={values.citizen}
        onChange={handleRadioBox}
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
    </form>
  );
};

export default Form;
