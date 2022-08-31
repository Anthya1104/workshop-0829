import React from 'react';
import { useAuth } from '../utilis/use-auth';

function User(props) {
  const { auth } = useAuth();
  return (
    <>
      <h1>User</h1>
      <div>Member Statue: {auth ? 'logged' : 'not logged'}</div>
      <div>{auth && 'welcome to the dashboard'}</div>
    </>
  );
}

export default User;
