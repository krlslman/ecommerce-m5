import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { HiBadgeCheck } from 'react-icons/hi';
import { BsPatchCheck } from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { BsCartCheckFill } from 'react-icons/bs';

import { useStateContext } from '../../context/StateContext';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  }, []);

  
  return (
    <div className='success-page'>
      <div className="success-wrapper">
        <div className='icon-block'>
          <BsBagCheckFill />
        </div>
        
        <div className="success">
          
          <h2>Your order is successful!</h2>
          <p className="email-msg">Check your email inbox for the receipt.</p>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link href="/">
            <button type="button" width="300px" className="btn continue-shopping">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Success