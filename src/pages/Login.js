import React from 'react';
import { useAuth } from '../utilis/use-auth';

function Login(props) {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <div> auth: {auth ? 'login' : 'no login'}</div>
      <button
        onClick={() => {
          setAuth(true);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          setAuth(false);
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          setAuth(auth ? false : true);
        }}
      >
        LogToggle
      </button>
    </>
  );
}

export default Login;
