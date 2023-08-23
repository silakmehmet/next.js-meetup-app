import LoginContext from './login-context';
import { useState } from 'react';

const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn]=useState(false)

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginContext = {
    isLoggedIn: isLoggedIn,
    loggedIn: loginHandler,
    loggedOut: logoutHandler,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
