import Layout from '../components/layout/Layout';
import GlobalStyles from '../components/utils/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStyles>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStyles>
  );
}

export default MyApp;
