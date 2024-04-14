import React from 'react';
import Header from '../../components/Header';
import UserProfile from '../../components/UserProfile';

function ProfilePage() {
  const testUser = {
    id: 1,
    firstName: 'Test',
    lastName: 'Testovich',
    imgSrc: 'http',
    email: 'email@gmail.com',
    password: 'password',
    isMale: true,
  };
  return (
    <>
      <Header />
      <p>ProfilePage</p>
      <UserProfile user={testUser} />
    </>
  );
}

export default ProfilePage;
