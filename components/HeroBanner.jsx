import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner } ) => {
  return (
    <div className='hero-banner-container' style={{ backgroundImage: `url(${urlFor(heroBanner.image)})` }}>
      <div className='container'>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* <img src={urlFor(heroBanner.image)} height="250" className="hero-banner-image" alt="hero-banner-image" /> */}
        <div>
          <Link href={`/product/${heroBanner.product}`} passHref>
            <button className='btn btn-outline btn-white-line' type='button'> { heroBanner.buttonText } </button>
          </Link>
          <div className="desc">
              <h5>Description</h5>
              <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner