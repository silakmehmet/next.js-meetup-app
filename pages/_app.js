import Layout from '@/components/layout/Layout';
import LoginProvider from '@/store/LoginProvider';
import '../styles/globals.css';

function Home({ Component, pageProps }) {
  return (
    <LoginProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginProvider>
  );
}

export default Home;
