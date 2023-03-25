import Head from 'next/head';
import React from 'react';
import { Footer, Header } from './';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Koral Store</title>
      </Head>
      <header>
        {/* <Navbar /> */}
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