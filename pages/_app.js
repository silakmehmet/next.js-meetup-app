import Layout from '@/components/layout/Layout';
import '../styles/globals.css';
import { useState } from 'react';

function Home({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <Component
        {...pageProps}
        isLoggedIn={isLoggedIn}
        checkLogin={checkLogin}
      />
    </Layout>
  );
}

export default Home;
