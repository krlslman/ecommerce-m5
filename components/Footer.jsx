import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import logo from "../src/assets/logo.svg";


const Footer = () => {
  
  return (
    <div className="footer-basic">
      
      <footer className="container">
        <div className="footer-logo navbar-brand">
          <Link href="/" passHref>
              <Image className="logo-icon" src={logo} alt="logo" />
          </Link>
        </div>
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="">
            <Link className="nav-link active" href="/" aria-current="page" passHref>Home</Link>
              
            </a>
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
            <BsTwitter />           
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
