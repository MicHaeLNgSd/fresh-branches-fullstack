import React from 'react';
import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';
import styles from './RegistrationPage.module.scss';

function RegistrationPage(props) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.startText}>Welcome to Registration Page!</h1>
        <RegistrationForm {...props} />
      </main>
    </>
  );
}

export default RegistrationPage;
