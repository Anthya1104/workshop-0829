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
    </>
  );
}

export default Login;
