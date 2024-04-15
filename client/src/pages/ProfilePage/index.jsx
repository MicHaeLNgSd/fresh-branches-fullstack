import React from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';
import styles from './ProfilePage.module.scss';

function ProfilePage({ userData: [user, setUser] }) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.startText}>Welcome to ProfilePage!</h1>
        <UserProfile user={user} />
      </main>
    </>
  );
}

export default ProfilePage;
