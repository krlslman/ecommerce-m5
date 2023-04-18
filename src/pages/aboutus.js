import Image from "next/image";
import React from "react";
import useTranslation from 'next-translate/useTranslation';

const Aboutus = () => {
  const { t } = useTranslation()
  
  return (
    <div className="aboutus container">
      <h2>{t('aboutus:title')}</h2>
      <h3 className="sub-header">{t('aboutus:How it started')}</h3>
      <p>{t('aboutus:paragraph_1')}</p>
      <h3 className="sub-header">{t('aboutus:Our Story')}</h3>
      <div className="photo-and-text-column flex-wrap flex-lg-nowrap justify-content-center">
        <div className="photo-column">
          <div className="image-item">
            <Image src={process.env.about_street} alt="Aboutus image 1" width={350} height={300} objectFit="cover"/>
          </div>
          <div className="image-item" style={{ filter: "saturate(0.1) contrast(1.2)" }}>
            <Image src={process.env.about_portre} alt="Aboutus image 2" layout="fill" objectFit="cover"/>
          </div>
        </div>
        <div className="text-column">
          <p>{t('aboutus:paragraph_2')}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
