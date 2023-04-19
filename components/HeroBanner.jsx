import React from 'react';
import Link from 'next/link';
// import { urlFor } from '../lib/client';
import Image from 'next/image';
// import home_banner_1 from '../src/assets/home_banner_1.jpg';
import useTranslation from 'next-translate/useTranslation';

const HeroBanner = ({ heroBanner } ) => {
  const { t } = useTranslation();

  return (
    // <div className='hero-banner-container' style={{ backgroundImage:  heroBanner && `url(${urlFor(heroBanner.image)})` }}>
    <div className='hero-banner-container' >
      <div className='hero-banner-image' >
        <Image src={process.env.home_banner_1} alt="American Furnitue Cover Image" 
          priority layout='fill' objectFit='cover'  />
      </div>
      <div className='container p-1 p-lg-5' style={{ position: "relative" }}>
        
        <p className="beats-solo">{t('home:Brown Leather Sofa')}</p>
        <h3>{t('home:2024 Collection')}</h3>
        <h1>{t('home:WINTER SALE')}</h1>
        {/* <img src={urlFor(heroBanner.image)} height="250" className="hero-banner-image" alt="hero-banner-image" /> */}
        <div className='button-and-desc'>
          <Link href={`/product/${heroBanner.product}`} passHref>
            <button className='btn btn-outline btn-white-line' type='button'>{t('common:Shop now')}</button>
          </Link>
          <div className="desc">
              <h5>{t('home:Description')}</h5>
              <p>{t('home:Dimensions_cm')}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner