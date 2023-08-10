import Layout from '@/components/layout/Layout';
import '../styles/globals.css';

function Home({ Component, pageProps }) {
  return (
    <Layout>
      {' '}
      <Component {...pageProps} />
    </Layout>
  );
}

export default Home;
