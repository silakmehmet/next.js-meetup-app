import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { useState } from 'react';

function Layout(props) {
  return (
    <div>
      <MainNavigation isLoggedIn={props.isLoggedIn} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
