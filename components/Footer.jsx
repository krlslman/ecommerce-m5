import React from "react";
import Script from "next/script";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-basic">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></Script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />
      
      <footer className="container">
        <div className="footer-logo">
          <Link href="/" passHref ><svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M922 1549 c-137 -13 -236 -86 -269 -198 -23 -80 -13 -216 27 -356 17 -60 35 -113 39 -118 4 -4 22 -2 40 4 38 13 38 8 -4 144 -24 75 -29 109 -29 202 -1 108 0 112 29 155 49 69 110 89 255 85 142 -3 194 -23 237 -88 27 -41 28 -48 27 -153 0 -92 -5 -126 -29 -201 -42 -136 -42 -131 -4 -144 18 -6 36 -8 40 -4 10 12 56 170 68 237 57 314 -92 466 -427 435z"/> <path d="M456 951 c-83 -87 -14 -234 139 -298 51 -21 55 -30 55 -129 l0 -72 35 -4 c20 -2 38 -2 40 1 3 2 5 39 5 82 l0 79 48 -8 c61 -9 383 -9 445 0 l47 8 0 -80 0 -80 40 0 40 0 0 89 0 90 56 25 c121 56 181 134 171 224 -10 91 -101 131 -178 79 -41 -27 -83 -107 -105 -199 l-16 -66 -82 -12 c-83 -13 -390 -9 -449 6 -19 4 -29 14 -33 33 -22 103 -50 167 -94 213 -42 43 -51 48 -91 48 -37 0 -50 -5 -73 -29z m117 -82 c19 -26 59 -130 52 -137 -8 -8 -65 30 -94 63 -29 34 -41 82 -24 99 14 13 46 1 66 -25z m925 -6 c2 -23 -5 -40 -29 -68 -32 -36 -86 -71 -96 -61 -10 9 29 107 54 137 34 40 67 37 71 -8z"/> </g> </svg></Link>
          <Link href="/" passHref ><p>Cherry Furniture</p></Link>
        </div>
          
          <div className="pages">
            <div className="page-item">
              <Link href="/" passHref >Home</Link>
            </div>
            <div className="page-item">
              <Link href="/shop" passHref >Shop</Link>
            </div>
            <div className="page-item">
              <Link href="/aboutus" passHref >About us</Link>
            </div>
            <div className="page-item">
              <Link href="/contact" passHref >Contact</Link>
            </div>
          </div>

          <div className="social">
          <a href="#">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-facebook"></i>
          </a>
         </div>
        
      </footer>
      <p className="copyright">Cherry Furniture © 2023 © All rights reserved </p>
    </div>
  );
};

export default Footer;
