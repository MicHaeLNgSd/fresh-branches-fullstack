import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { USER_REGISTRATION_SCHEMA } from '../../utils/validate';
import styles from './RegistrationForm.module.scss';

const initialValues = {
  firstName: '',
  lastName: '',
  imgSrc: '',
  email: '',
  password: '',
  confirmPassword: '',
  isMale: 'true',
};

function RegistrationForm({ userData: [user, setUser] }) {
  const handleSubmit = (values, formikBag) => {
    const { isMale, ...rest } = values;
    const newUser = { ...user, ...rest, isMale: isMale !== 'false' };
    setUser(newUser);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_REGISTRATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Field name='firstName' placeholder='Name' className={styles.input} autofocus />
        <ErrorMessage name='firstName' component='div' className={styles.error} />
        <Field name='lastName' placeholder='Surname' className={styles.input} />
        <ErrorMessage name='lastName' component='div' className={styles.error} />
        {/* <Field name='imgSrc' />
        <ErrorMessage name='imgSrc' /> */}
        <Field
          name='email'
          type='email'
          placeholder='email@gmail.com'
          className={styles.input}
        />
        <ErrorMessage name='email' component='div' className={styles.error} />
        <Field
          name='password'
          type='password'
          placeholder='Password'
          className={styles.input}
        />
        <ErrorMessage name='password' component='div' className={styles.error} />
        <Field
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          className={styles.input}
        />
        <ErrorMessage name='confirmPassword' component='div' className={styles.error} />
        <div role='group' className={styles.inputRadioSection}>
          <label>
            <Field name='isMale' type='radio' value='true' /> Male
          </label>
          <label>
            <Field name='isMale' type='radio' value='false' /> Female
          </label>
        </div>
        <ErrorMessage name='isMale' component='div' className={styles.error} />
        <div className={styles.btnsSection}>
          <button type='submit'>Submit</button>
          <button type='reset'>Reset</button>
        </div>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
