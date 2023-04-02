import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta httpEquiv="Content-Security-Policy" 
            content="
            default-src 'self' data: gap: ws: ; 
            style-src 'self' 'unsafe-inline' * ;
            style-src-elem 'self' 'unsafe-inline' *;
            script-src 'unsafe-eval' 'unsafe-inline' *;
            media-src 'none' ; 
            font-src * 'unsafe-inline' ;
            connect-src * ;
            img-src 'self' data: content: * ;
            frame-src *;
            "            
            />    
            
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"/>
        
        
          
            {/* 
            default-src 'self' data: gap: ws: ; 
            style-src 'self' 'unsafe-inline' m.stripe.network ;
            style-src-elem 'self' 'unsafe-inline' *;
            script-src 'unsafe-eval' 'unsafe-inline' *;
            media-src 'none' ; 
            font-src * 'unsafe-inline' ;
            connect-src * ;
            img-src 'self' data: content: * ;
            frame-src 'self' js.stripe.com americanfurniture-ea38d.firebaseapp.com;
            ----
            font-src 'self' fonts.googleapis.com m.stripe.com js.stripe.com ;
            frame-src 'self' 'unsafe-eval' 'unsafe-inline' data: ;
            www.youtube.com
            i5.walmartimages.com
            fonts.gstatic.com
            fonts.googleapis.com
            cdn.sanity.io
            js.stripe.com  
            // youtube.com www.youtube.com js.stripe.com m.stripe.com        
            */}


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
