import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const FooterBanner = ({ footerBanner: { product } }) => { // image
  const { t } = useTranslation();

  return (
    <div className="footer-banner-container" >
      <div className="banner-desc">
        <div className="left">
          <p>{t('home:discount')}</p>
          <h3>{t('home:slogan_1')}</h3>
          <h3>{t('home:slogan_2')}</h3>
          <p>{t('home:date_range')}</p>
        </div>
        <div className="right">
          <p>{t('home:smaller_text_1')}</p>
          <h3>{t('home:slogan_3')}</h3>
          <p>{t('home:smaller_text_2')}</p>
          <Link href={`/product/${product}`} passHref >
            <button className='btn btn-outline btn-white-line' type="button">{t('common:Shop now')}</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default FooterBanner