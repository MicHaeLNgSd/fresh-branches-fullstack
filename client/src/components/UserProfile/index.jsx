import React from 'react';

function UserProfile({
  user: { id, firstName, lastName, imgSrc, email, password, isMale },
}) {
  return (
    <div>
      <h2>UserProfile</h2>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
      <p>{password}</p>
      <p>{isMale || 'fe'}male</p>
    </div>
  );
}

export default UserProfile;
