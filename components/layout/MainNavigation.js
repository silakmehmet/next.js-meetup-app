import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation(props) {
  const loginBtn = props.isLoggedIn ? 'Wellcome' : 'Login';
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
          <li>
            <Link href="/login">{loginBtn}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
