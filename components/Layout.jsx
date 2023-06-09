import Head from 'next/head';
import React from 'react';
import { Footer, Header } from './';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <Head>
        <title>American Furniture</title>          
      </Head>

      <header>
        <Header />
      </header>

      <main className="main-container">
        {children}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout