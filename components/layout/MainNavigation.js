import classes from './MainNavigation.module.css';
import Link from 'next/link';
import LoginContext from '@/store/login-context';
import { useContext } from 'react';

function MainNavigation() {
  const loginCtx = useContext(LoginContext);
  const loginStatus = loginCtx.isLoggedIn ? (
    <Link href="/logout">Welcome</Link>
  ) : (
    <Link href="/login">Login</Link>
  );
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Next.js Meetups
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
          <li>{loginStatus}</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
