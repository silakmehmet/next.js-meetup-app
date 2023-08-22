import Card from '../ui/Card';
import classes from './Login.module.css';
import { useRef, useState } from 'react';

const passwordIsValid = (value) => value.trim() !== '';
const emailIsValid = (value) => value.trim() !== '' && value.includes('@');

function LoginForm(props) {
  const [formValidity, setFormValidity] = useState({
    email: true,
    password: true,
  });

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const enteredEmailIsValid = emailIsValid(enteredEmail);
    const enteredPasswordIsValid = passwordIsValid(enteredPassword);

    setFormValidity({
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
    });

    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

    if (!formIsValid) {
      return;
    }
    props.onLogin();
  }

  const emailValidityClasses = `${classes.control} ${
    formValidity.email ? '' : classes.invalid
  }`;

  const passwordValidityClasses = `${classes.control} ${
    formValidity.password ? '' : classes.invalid
  }`;
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={emailValidityClasses}>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" ref={emailInputRef} />
          {!formValidity.email && (
            <p>Please enter a valid email!(includes "@") </p>
          )}
        </div>
        <div className={passwordValidityClasses}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" ref={passwordInputRef} />
          {!formValidity.password && <p>Please enter a password! </p>}
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
}
export default LoginForm;
