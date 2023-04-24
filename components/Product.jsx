/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import useTranslation from 'next-translate/useTranslation';
import { useStateContext } from '../context/StateContext';

const Product = ({ product: { image, name, slug, price } }) => {
  const { lang } = useTranslation();
  const { exchangeRate } = useStateContext();

  return (    
    <div className='product-card-wrapper col-6 col-lg-3'>
      <Link href={`/product/${slug.current}`} passHref >
        <div className="product-card p-1 p-lg-3">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className='product-image'
            alt='product image'
          />
          
          <p className="product-name">{name}</p>
          <p className="product-price">{lang === 'en' ? `$ ${price}` : `${(price*exchangeRate).toFixed(2)} ₺` }</p>
        </div>
      </Link>
    </div>
  )
}

export default Product