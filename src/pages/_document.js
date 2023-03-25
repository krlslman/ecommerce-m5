import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <meta httpEquiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com https://apis.google.com 'unsafe-inline'; font-src 'self' https://q.stripe.com https://fonts.gstatic.com; img-src 'self' https://cdn.sanity.io http://localhost:3000; script-src nonce=<random_value>; " /> */}
        <link
            href="/fonts/poppins-light.ttf"
            rel="preload"
            as="font"
            crossOrigin=""
          />
          <style>{`
            @font-face {
              font-family: 'Poppins';
              src: url('/fonts/poppins-light.ttf');
              font-weight: 300;
              font-style: normal;
            }
          `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
