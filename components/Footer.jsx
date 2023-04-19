import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-basic">
      
      <footer className="container">
        <div className="footer-logo navbar-brand">
          <Link href="/" passHref>
              <Image src={process.env.logo_svg} alt="logo" width={300} height={80} objectFit="contain" />
          </Link>
        </div>
          
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a href="">
            <Link className="nav-link active" href="/" aria-current="page" passHref>{t('common:Home')}</Link>
              
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/shop" aria-current="page" passHref>{t('common:Shop')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/aboutus" aria-current="page" passHref>{t('common:About')}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact" aria-current="page" passHref>{t('common:Contact')}</Link>
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
      <p className="copyright">{t('common:Copyright')}</p>
    </footer>
  );
};

export default Footer;
