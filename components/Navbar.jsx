import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import {useStateContext} from '../context/StateContext';
import Cart from './Cart';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [show, setShow] = useState(true);
    const prevScrollY = useRef(0);
    
    const handleShow = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY.current || currentScrollY <= 200) {
        setShow(true);
      } else if (currentScrollY > prevScrollY.current && currentScrollY > 0) {
        setShow(false);
      } else if (currentScrollY === 0) {
        setShow(true);
      }  
      prevScrollY.current = currentScrollY;
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleShow);
      return () => {
        window.removeEventListener('scroll', handleShow); 
      }
    }, []);

  return (
    <header className={` navbar-container ${show ? 'visible' : 'hidden'} `}>
      <div className="container">
        <p className="logo">
          {/* <Link href="/"><img height={50} src="data:image/png;base64,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" alt="" /></Link> */}
          {/* <Link href="/"><img height={250} src={logo} alt="" /></Link> */}
          <Link href="/" passHref ><svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 0 200.000000 200.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M922 1549 c-137 -13 -236 -86 -269 -198 -23 -80 -13 -216 27 -356 17 -60 35 -113 39 -118 4 -4 22 -2 40 4 38 13 38 8 -4 144 -24 75 -29 109 -29 202 -1 108 0 112 29 155 49 69 110 89 255 85 142 -3 194 -23 237 -88 27 -41 28 -48 27 -153 0 -92 -5 -126 -29 -201 -42 -136 -42 -131 -4 -144 18 -6 36 -8 40 -4 10 12 56 170 68 237 57 314 -92 466 -427 435z"/> <path d="M456 951 c-83 -87 -14 -234 139 -298 51 -21 55 -30 55 -129 l0 -72 35 -4 c20 -2 38 -2 40 1 3 2 5 39 5 82 l0 79 48 -8 c61 -9 383 -9 445 0 l47 8 0 -80 0 -80 40 0 40 0 0 89 0 90 56 25 c121 56 181 134 171 224 -10 91 -101 131 -178 79 -41 -27 -83 -107 -105 -199 l-16 -66 -82 -12 c-83 -13 -390 -9 -449 6 -19 4 -29 14 -33 33 -22 103 -50 167 -94 213 -42 43 -51 48 -91 48 -37 0 -50 -5 -73 -29z m117 -82 c19 -26 59 -130 52 -137 -8 -8 -65 30 -94 63 -29 34 -41 82 -24 99 14 13 46 1 66 -25z m925 -6 c2 -23 -5 -40 -29 -68 -32 -36 -86 -71 -96 -61 -10 9 29 107 54 137 34 40 67 37 71 -8z"/> </g> </svg></Link>
          <Link href="/" passHref >Cherry Furniture</Link>
        </p>
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

        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </header>
  )
}

export default Navbar