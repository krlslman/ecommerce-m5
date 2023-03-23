import React from 'react';
import Link from 'next/link';

// import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText } }) => { // image
  return (
    <div className="footer-banner-container" >
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        

        {/* <img 
          src={urlFor(image)} className="footer-banner-image" alt="Footer Banner Image"
        /> */}
        {/* <img src="https://i5.walmartimages.com/asr/aaf61d1e-ff17-4027-b466-d5eac12b9c67.d0565560b5373e75dbed24a3a5c799e6.png" alt="" /> */}
        {/* <Image src={urlFor(image)} alt="Footer Banner Image" width={350} height={180} className="footer-banner-image" /> */}

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`} passHref >
            <button type="button">{buttonText}</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner