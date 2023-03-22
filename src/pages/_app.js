import React from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from '../../components/Layout';
import { StateContext } from '../../context/StateContext';
import '../styles/globals.css';

// import { Roboto } from 'next/font/google';
// const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        {/* <main className={roboto.className}> */}
          <Component {...pageProps} />
        {/* </main> */}


      </Layout>
    </StateContext>
  )
}

export default App