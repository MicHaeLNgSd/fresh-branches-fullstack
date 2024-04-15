import React from 'react';
import Header from '../../components/Header';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  imgSrc: '',
  email: '',
  password: '',
  confirmPassword: '',
  isMale: 'true',
};

const validationSchema = Yup.object({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'Too Short!').max(16, 'Too Short!'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  isMale: Yup.boolean().required('Required'),
});

function RegistrationPage({ userData: [user, setUser] }) {
  const handleSubmit = (values, formikBag) => {
    console.log(values);

    const { isMale, ...rest } = values;
    const newUser = { ...user, ...rest, isMale: isMale !== 'false' };
    console.log(newUser);
    setUser(newUser);
    formikBag.resetForm();
  };

  return (
    <>
      <Header />
      <p>RegistrationPage</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name='firstName' placeholder='Name' />
          <ErrorMessage name='firstName' />
          <Field name='lastName' placeholder='Surname' />
          <ErrorMessage name='lastName' />
          <Field name='imgSrc' />
          <ErrorMessage name='imgSrc' />
          <Field name='email' type='email' placeholder='email@gmail.com' />
          <ErrorMessage name='email' />
          <Field name='password' type='password' placeholder='Password' />
          <ErrorMessage name='password' />
          <Field name='confirmPassword' type='password' placeholder='Confirm Password' />
          <ErrorMessage name='confirmPassword' />
          <div role='group'>
            <label>
              <Field name='isMale' type='radio' value='true' /> Male
            </label>
            <label>
              <Field name='isMale' type='radio' value='false' /> Female
            </label>
          </div>
          <ErrorMessage name='isMale' />
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </Form>
      </Formik>
    </>
  );
}

export default RegistrationPage;
