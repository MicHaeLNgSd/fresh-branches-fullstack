import React from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';

function ProfilePage({ userData: [user, setUser] }) {
  return (
    <>
      <Header />
      <p>ProfilePage</p>
      <button>Change</button>
      <UserProfile user={user} />
    </>
  );
}

export default ProfilePage;
