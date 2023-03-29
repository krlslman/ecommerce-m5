/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const Product = ({ product: { image, name, slug, price } }) => {
  // let urlFor_generated = urlFor(image && image[0]); DENEME
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
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product