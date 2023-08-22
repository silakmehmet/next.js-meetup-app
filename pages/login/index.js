import LoginForm from '@/components/layout/Login';
import { useState } from 'react';
import { useRouter } from 'next/router';

function LoginPage(props) {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  function loginHandler() {
    setLogin(true);
    props.checkLogin();
    router.push('/');
  }

  return <LoginForm onLogin={loginHandler} />;
}

export default LoginPage;
