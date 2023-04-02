import React from 'react';
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { useStateContext } from '../context/StateContext';

const LoginButton = () => {
    const { user, toggleDropdown, dropdownVisible, handleLogin, handleLogout } = useStateContext()
    
  return (
    <>
    { user 
        ? (
        <div className="login-info d-flex flex-nowrap ">
            <p>{user.displayName}</p>
            <div className="dropdown">
                <button className="dropbtn border-0" onClick={toggleDropdown}>
                    <MdOutlineArrowDropDownCircle />
                </button>
                {dropdownVisible && <div 
                className="dropdown-content logout"
                style={{position: "fixed"}}
                >
                    <button 
                    style={{maxWidth: "max-content"}}
                    className="btn btn-fill btn-logout p-2 px-3 m-0"
                    onClick={handleLogout}>LogOut</button>
                </div>}
            </div>
        </div>
            )
        : (
            <div className="login-info d-flex flex-nowrap ">
                <button className="btn btn-outline btn-login p-0 px-lg-4 py-lg-1 px-3 m-0" 
                style={{ minWidth: "fit-content", textTransform: "capitalize"}}
                onClick={handleLogin}>Login</button>
            </div>
            )
        
    }        
    </>
  )
}

export default LoginButton