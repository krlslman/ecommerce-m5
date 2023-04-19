import React from 'react';
import { urlFor } from '../lib/client';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

const Categories = ({products}) => {
  const { t } = useTranslation();
    const sofaCategoryProduct = (products?.filter(product => product.category === 'sofa' && product.slug.current === 'marlon-corona'));
    const chairCategoryProduct = products?.filter(product => product.category === 'chair' && product.slug.current === 'kara-eads');
    const tableCategoryProduct = products?.filter(product => product.category === 'table' && product.slug.current === 'hannah-busing');
    const chandelierCategoryProduct = products?.filter(product => product.category === 'chandelier' && product.slug.current === 'pietro-piovesan');
    const router = useRouter();

    const handleCategoryClick = (category) => {
        // window.location.href = `/shop?category=${category}`;
        router.push(`/shop?category=${category}`);
      };
    
      return (
        <section className='categories-wrapper'>
          <h2>{t('home:Categories')}</h2>
          <div className="categories-container container">
          {sofaCategoryProduct ? 
              <div className="categories-item" style={{ backgroundImage: `url(${urlFor(sofaCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('sofa')}>
                <h3 className='categ-header' >{t('home:Sofa')}</h3>
              </div> : "Category can't be loaded."}
            {chairCategoryProduct ? 
              <div className="categories-item" style={{ backgroundImage: `url(${urlFor(chairCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('chair')}>
                <h3 className='categ-header' >{t('home:Chair')}</h3>
              </div> : "Category can't be loaded."}
            {tableCategoryProduct ? 
              <div className="categories-item" style={{ backgroundImage: `url(${urlFor(tableCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('table')}>
                <h3 className='categ-header' >{t('home:Table')}</h3>
              </div> : "Category can't be loaded."}
            {chandelierCategoryProduct ? 
              <div className="categories-item" style={{ backgroundImage: `url(${urlFor(chandelierCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('chandelier')}>
                <h3 className='categ-header' >{t('home:Chandelier')}</h3>
              </div> : "Category can't be loaded."}
          </div>
        </section>
      )
}

export default Categories