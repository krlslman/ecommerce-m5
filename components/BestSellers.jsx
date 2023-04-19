import React from "react";
import  Product  from "./Product";
import useTranslation from 'next-translate/useTranslation';

const BestSellers = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="products-heading">
        <h2>{t('home:Best Seller Products')}</h2>
        <p>{t('home:There are many models')}</p>
      </div>

      <div className="products-container container">
        {/* {products?.map(
          (product) => product.name )} */}

        {products?.slice(9, 17).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
