import LoginForm from '@/components/layout/Login';
import { Fragment } from 'react';
import Head from 'next/head';

function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Next.js Meetups | Login</title>
        <meta
          name="description"
          content="Login and add your own Next.js meetups!"
        />
      </Head>
      <LoginForm />
    </Fragment>
  );
}

export default LoginPage;
