import Card from '../ui/Card';
import classes from './Logout.module.css';
import LoginContext from '@/store/login-context';
import { useContext } from 'react';
import { useRouter } from 'next/router';

function Logout() {
  const router = useRouter();
  const loginCtx = useContext(LoginContext);

  const logoutHandler = () => {
    loginCtx.loggedOut();
    router.push('/');
  };

  return (
    <div className={classes.actions}>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}
export default Logout;
