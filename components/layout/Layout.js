import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { useState } from 'react';

function Layout(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <MainNavigation />
      <main className={classes.main} isloggedin="false">
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
