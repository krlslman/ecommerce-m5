import React from 'react';
import { urlFor } from '../lib/client';
import { useRouter } from 'next/router';

const Categories = ({products}) => {
    const sofaCategoryProduct = products.filter(product => product.category === 'sofa' && product.slug.current === 'martin-pechy');
    const chairCategoryProduct = products.filter(product => product.category === 'chair' && product.slug.current === 'kara-eads');
    const tableCategoryProduct = products.filter(product => product.category === 'table' && product.slug.current === 'hannah-busing');
    const chandelierCategoryProduct = products.filter(product => product.category === 'chandelier' && product.slug.current === 'pietro-piovesan');
    const router = useRouter();

    const handleCategoryClick = (category) => {
        // window.location.href = `/shop?category=${category}`;
        router.push(`/shop?category=${category}`);
      };
    
      return (
        <section className='categories-wrapper'>
          <h2>Categories</h2>
          <div className="categories-container container">
            <div className="categories-item" style={{ backgroundImage: `url(${urlFor(sofaCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('sofa')}>
              <h3 className='categ-header' >Sofa</h3>
            </div>
            <div className="categories-item" style={{ backgroundImage: `url(${urlFor(chairCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('chair')}>
              <h3 className='categ-header' >Chair</h3>
            </div>
            <div className="categories-item" style={{ backgroundImage: `url(${urlFor(tableCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('table')}>
              <h3 className='categ-header' >Table</h3>
            </div>
            <div className="categories-item" style={{ backgroundImage: `url(${urlFor(chandelierCategoryProduct[0].image[0])})` }} onClick={() => handleCategoryClick('chandelier')}>
              <h3 className='categ-header' >Chandelier</h3>
            </div>
          </div>
        </section>
      )
}

export default Categories