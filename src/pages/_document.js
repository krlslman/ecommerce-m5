import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <meta httpEquiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com https://apis.google.com 'unsafe-inline'; font-src 'self' https://q.stripe.com https://fonts.gstatic.com; img-src 'self' https://cdn.sanity.io http://localhost:3000; script-src nonce=<random_value>; " /> */}
        
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
