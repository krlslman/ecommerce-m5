import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* <meta httpEquiv="Content-Security-Policy" content="style-src 'self' https://fonts.googleapis.com https://apis.google.com 'unsafe-inline'; font-src 'self' https://q.stripe.com https://fonts.gstatic.com; img-src 'self' https://cdn.sanity.io http://localhost:3000; script-src nonce=<random_value>; " /> */}
        
          
          <meta httpEquiv="Content-Security-Policy" 
            content="default-src 'self' data: gap: ws: ; 
            style-src 'self' 'unsafe-inline' *;
            script-src 'self' 'unsafe-eval' 'unsafe-inline' *;
            media-src 'none'; 
            font-src *;
            connect-src *;
            img-src 'self' data: content: * ;
            frame-src 'self' 'unsafe-eval' 'unsafe-inline' https://m.youtube.com https://stripe.com;
            " />
            {/* 
            https://www.youtube.com https://cdn.sanity.io
            i5.walmartimages.com
            fonts.gstatic.com
            fonts.googleapis.com
            cdn.sanity.io
            https://js.stripe.com'
            
            */}
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
