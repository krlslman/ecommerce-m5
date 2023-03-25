import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';
import { StateContext } from '../../context/StateContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/custom.css';

function App({ Component, pageProps }) {
  useEffect(() => {
    // Load the Bootstrap JavaScript files dynamically
    import('bootstrap/dist/js/bootstrap.min.js');
  }, []);

  return (
    <StateContext>
      <Layout>
        <Toaster />
          <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default App