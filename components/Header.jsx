import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import LoginButton from "./LoginButton";
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const Header = () => {  
  const { t } = useTranslation();

  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [ searchExpand, setSearchExpand ] = useState(false);  

  const closeNavbarAfterMenuItemClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const clickEvent = new Event("click");
    navbarToggler.dispatchEvent(clickEvent);
  }

  const toggleSearchExpand = () => {
    setSearchExpand(!searchExpand);    
  }
  
  const { locales } = useRouter();
  const router = useRouter();
  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className={` navbar2 `}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <div className="navbar-brand">
            <Link href="/" passHref>
              <Image src={process.env.logo_svg} alt="logo" width={300} height={80} objectFit="contain" />
            </Link>
          </div>
          <div className="navbar-toggler-wrapper">            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> 
          </div>                   

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link active"
                  href="/"
                  aria-current="page"
                  passHref
                >
                  {t('common:Home')}
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/shop"
                  aria-current="page"                  
                  passHref
                >
                {t('common:Shop')}
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/aboutus"
                  aria-current="page"
                  passHref
                >
                  {t('common:About')}
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/contact"
                  aria-current="page"
                  passHref
                >
                  {t('common:Contact')}
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>

            <form
              className="d-flex flex-row-reverse justify-content-between"
              role="search"
            >   
              <div className="search-icon d-flex flex-row-reverse justify-content-start align-items-center">
                <BiSearch className="px-2" onClick={()=>toggleSearchExpand(!searchExpand)}/>
                  <input
                    className={`form-control me-2 ${searchExpand ? "expanded" : ""}`}
                    type="search"
                    placeholder={t('common:Search')}
                    aria-label="Search"
                    onBlur={()=>toggleSearchExpand(!searchExpand)}
                  />        
              </div>
              <form className="ms-3 d-block d-lg-none">
                <select name="language-picker-select" id="language-picker-select" onChange={handleLanguageChange} style={{textTransform:"uppercase", backgroundColor: "transparent", borderRadius: "8px"}}>
                  {locales?.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </form>            
              <button className="cart-icon d-lg-none"
                type="button"
                onClick={() => setShowCart(true)}
              >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
            </form>   
            
          </div>
          <button className="cart-icon d-none d-lg-block"
            type="button"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          <form className="ms-3 d-none d-lg-block">
            <select name="language-picker-select" id="language-picker-select" onChange={handleLanguageChange} style={{textTransform:"uppercase", backgroundColor: "transparent", borderRadius: "8px"}}>
              {locales?.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </form>
          
          {/* d-none d-lg-block */}
            <div className="login-button-wrapper ms-4">
              <LoginButton />              
            </div>

        </div>

        {showCart && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
