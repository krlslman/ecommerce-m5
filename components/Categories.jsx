import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
const Categories = ({products}) => {
    const sofaCategoryProduct = products.filter(product => product.category === 'sofa' && product.slug.current === 'martin-pechy');
    const chairCategoryProduct = products.filter(product => product.category === 'chair' && product.slug.current === 'kara-eads');
    const tableCategoryProduct = products.filter(product => product.category === 'table' && product.slug.current === 'hannah-busing');
    const chandelierCategoryProduct = products.filter(product => product.category === 'chandelier' && product.slug.current === 'pietro-piovesan');
  return (
    <section className='categories-wrapper'>
        <h2>Categories</h2>
        <div className="categories-container container">
            
            <Link href="/a" passhref ><div className="categories-item" style={{ backgroundImage: `url(${urlFor(sofaCategoryProduct[0].image[0])})` }}>
                <h3 className='categ-header' >Sofa</h3>
            </div></Link>
            <Link href="/s" passhref ><div className="categories-item" style={{ backgroundImage: `url(${urlFor(chairCategoryProduct[0].image[0])})` }}>
                <h3 className='categ-header' >Chair</h3>
            </div></Link>
            <Link href="/d" passhref ><div className="categories-item" style={{ backgroundImage: `url(${urlFor(tableCategoryProduct[0].image[0])})` }}>
                <h3 className='categ-header' >Table</h3>
            </div></Link>
            <Link href="/f" passhref ><div className="categories-item" style={{ backgroundImage: `url(${urlFor(chandelierCategoryProduct[0].image[0])})` }}>
                <h3 className='categ-header' >Chandelier</h3>
            </div></Link>
        </div>
    </section>
  )
}

export default Categories