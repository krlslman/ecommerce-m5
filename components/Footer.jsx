import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { TfiTwitterAlt } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer-basic">
      
      <footer className="container">
        <div className="footer-logo">
          {/* <Link href="/" passHref ><svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M922 1549 c-137 -13 -236 -86 -269 -198 -23 -80 -13 -216 27 -356 17 -60 35 -113 39 -118 4 -4 22 -2 40 4 38 13 38 8 -4 144 -24 75 -29 109 -29 202 -1 108 0 112 29 155 49 69 110 89 255 85 142 -3 194 -23 237 -88 27 -41 28 -48 27 -153 0 -92 -5 -126 -29 -201 -42 -136 -42 -131 -4 -144 18 -6 36 -8 40 -4 10 12 56 170 68 237 57 314 -92 466 -427 435z"/> <path d="M456 951 c-83 -87 -14 -234 139 -298 51 -21 55 -30 55 -129 l0 -72 35 -4 c20 -2 38 -2 40 1 3 2 5 39 5 82 l0 79 48 -8 c61 -9 383 -9 445 0 l47 8 0 -80 0 -80 40 0 40 0 0 89 0 90 56 25 c121 56 181 134 171 224 -10 91 -101 131 -178 79 -41 -27 -83 -107 -105 -199 l-16 -66 -82 -12 c-83 -13 -390 -9 -449 6 -19 4 -29 14 -33 33 -22 103 -50 167 -94 213 -42 43 -51 48 -91 48 -37 0 -50 -5 -73 -29z m117 -82 c19 -26 59 -130 52 -137 -8 -8 -65 30 -94 63 -29 34 -41 82 -24 99 14 13 46 1 66 -25z m925 -6 c2 -23 -5 -40 -29 -68 -32 -36 -86 -71 -96 -61 -10 9 29 107 54 137 34 40 67 37 71 -8z"/> </g> </svg></Link>
          <Link href="/" passHref ><p>Cherry Furniture</p></Link> */}
          <img style={{maxWidth:"270px"}}
                src="https://americanfurnitureegypt.com/wp-content/uploads/2020/06/AF-2_466733edc2d4e34872729a2301287d41-1.png"
                alt="logo"
              />
        </div>
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" href="/" aria-current="page" passHref>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/shop" aria-current="page" passHref>Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/aboutus" aria-current="page" passHref>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact" aria-current="page" passHref>Contact</Link>
          </li>
        </ul>

        <div className="social">
          <Link href="/" passHref>
            <BsInstagram />            
          </Link>
          <Link href="/" passHref>
            <TfiTwitterAlt />           
          </Link>
          <Link href="/" passHref>
            <BsFacebook />            
          </Link>
        </div>
        
      </footer>
      <p className="copyright">Cherry Furniture © 2023 © All rights reserved </p>
    </div>
  );
};

export default Footer;
