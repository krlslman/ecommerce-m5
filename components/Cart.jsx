/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import useTranslation from 'next-translate/useTranslation';

const Cart = () => {
  const { t, lang } = useTranslation();
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, showCart, setShowCart, toggleCartItemQuanitity, onRemove, exchangeRate } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
    // So we created one specific instance of checkout, user can come back later and proceed.   
  } 
  
  return (
    <div className="cart-wrapper" ref={cartRef} style={{ transform: showCart ? 'translateX(0)' : 'translateX(100%)', transition: 'all 0.5s ease-in-out' }}>
      <div className="cart-container" style={{ transform: showCart ? 'translateX(0)' : 'translateX(100%)', transition: 'all 0.5s ease-in-out' }}>
      <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">{t('common:Your Cart')}</span>
          <span className="cart-num-items">({t('common:x items', {totalQuantities})})</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>{t('common:Your shopping bag is empty')}</h3>
            <Link href="/" passHref>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn btn-fill"
              >
                {t('common:Continue Shopping')}
              </button>
            </Link>
          </div>
        )}
        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" alt="Product Image"/>

              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>
                    {lang === 'en' ? `${item.price.toFixed(2)} $` : (exchangeRate*item.price ? `${(exchangeRate*item.price).toFixed(2)} ₺` : "-")}
                  </h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <>
            <div className='cart-bottom'>
              <div className='total'>
                <h3>{t('common:Subtotal')}</h3>
                <h3><strong>{lang === 'en' ? `${totalPrice.toFixed(2)} $` : (exchangeRate*totalPrice ? `${(exchangeRate*totalPrice).toFixed(2)} ₺` : "-")}</strong></h3>
              </div>
              
              <div className="d-flex justify-content-end">
                <button className="btn btn-fill m-0 mt-3 mt-lg-3" type='button' onClick={handleCheckout} >
                  {t('common:pay_with_stripe')}
                </button>
              </div>
              
            </div>
            
          </>
        )}
      </div>
    </div>
  )
}

export default Cart