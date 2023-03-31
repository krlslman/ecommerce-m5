import React from 'react';
import Link from 'next/link';
// import { urlFor } from '../lib/client';
import Image from 'next/image';
import bannerCover from '../src/assets/home_banner_1.jpg';
// const bannerCover = import('../src/assets/home_banner_1.jpg')

const HeroBanner = ({ heroBanner } ) => {

  return (
    // <div className='hero-banner-container' style={{ backgroundImage:  heroBanner && `url(${urlFor(heroBanner.image)})` }}>
    <div className='hero-banner-container' >
      <div className='hero-banner-image' >
        <Image src={bannerCover} alt="American Furnitue Cover Image" 
          priority layout='fill' objectFit='cover' placeholder="blur" />
      </div>
      <div className='container p-1 p-lg-5' style={{ position: "relative" }}>
        
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* <img src={urlFor(heroBanner.image)} height="250" className="hero-banner-image" alt="hero-banner-image" /> */}
        <div className='button-and-desc'>
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