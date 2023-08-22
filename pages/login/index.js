import LoginForm from '@/components/layout/Login';
import { useState } from 'react';
import { useRouter } from 'next/router';

function LoginPage() {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  function loginHandler() {
    setLogin(true);
    router.push('/new-meetup');
  }

  return <LoginForm onLogin={loginHandler} />;
}

export default LoginPage;
