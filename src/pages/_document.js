import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <meta httpEquiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com https://apis.google.com 'unsafe-inline'; font-src 'self' https://q.stripe.com https://fonts.gstatic.com; img-src 'self' https://cdn.sanity.io http://localhost:3000; script-src nonce=<random_value>; " /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
