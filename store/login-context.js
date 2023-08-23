import React from 'react';

const LoginContext = React.createContext({
  isLoggedIn: Boolean,
  loggedIn: () => {},
  loggedOut: () => {},
});

export default LoginContext;
