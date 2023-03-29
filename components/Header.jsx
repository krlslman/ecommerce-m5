// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import logo from "../src/assets/logo.svg";

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [ searchExpand, setSearchExpand ] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const closeNavbarAfterMenuItemClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const clickEvent = new Event("click");
    navbarToggler.dispatchEvent(clickEvent);
  }

  const toggleSmallScreen = () => {
    const isSmall = window.screen.width < 800;
    setIsSmallScreen(isSmall)
    return isSmall;
  }

  useEffect(() => {
    toggleSmallScreen();
  }, [])
  

  const toggleSearchExpand = () => {
    setSearchExpand(!searchExpand);    
  }
  
  return (
    <header className={` navbar2 `}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <div className="navbar-brand">
            <Link href="/" passHref>
              <Image className="logo-icon" src={logo} alt="logo" />
            </Link>
          </div>

          <div>
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

            { isSmallScreen && <button className="cart-icon"
              type="button"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>}
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
                  Home
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/shop"
                  aria-current="page"                  
                  passHref
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/aboutus"
                  aria-current="page"
                  // onClick={set}
                  passHref
                >
                  About
                </Link>
              </li>
              <li className="nav-item" onClick={closeNavbarAfterMenuItemClick}>
                <Link
                  className="nav-link"
                  href="/contact"
                  aria-current="page"
                  passHref
                >
                  Contact
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
              className="d-flex flex-row-reverse justify-content-start align-items-center"
              role="search"
            >
              <BiSearch className="search-icon" onClick={()=>toggleSearchExpand(!searchExpand)}/>
              <input
                // className="form-control me-2 "
                className={`form-control me-2 ${searchExpand ? "expanded" : ""}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
                onBlur={()=>toggleSearchExpand(!searchExpand)}
              />
              {/* <button className="btn btn-navbar btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
          {!isSmallScreen && <button className="cart-icon d-none d-lg-block"
            type="button"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>}
        </div>

        {showCart && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
