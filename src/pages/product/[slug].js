//* This page (slug) is actually PRODUCT DETAILS page for a specific product. But dynamic.

import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar } from 'react-icons/ai';
import { Product } from '../../../components';
import { useStateContext } from '../../../context/StateContext';
import { urlFor, client } from '../../../lib/client';


const ProductDetails = ({ products, product }) => {
    const { image, name, price } = product;
    const [indexImg, setIndexImg] = useState(0); 
    const { qty, incQty, decQty, onAdd } = useStateContext();

  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className="image-container">
                    <img src={urlFor(image && image[indexImg])} className="product-detail-image" alt=''/>                    
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img 
                            key={i}
                            src={urlFor(item)}
                            className={i === indexImg ? "small-image selected-image" : "small-image"}
                            onMouseEnter={() => setIndexImg(i)}
                            alt='asd'
                        />
                    ))}
                </div>               
            </div>
            
            <div className="product-detail-desc">
                <h1>{name}</h1>
                <div className="reviews">
                    <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    {/* <AiOutlineStar /> */}
                    </div>
                    <p>
                    (20)
                    </p>
                </div>
                <h4>Details: </h4>
                <p>{}</p>
                <p className="price">${price}</p>
                <div className="quantity">
                    <h3>Quantity:</h3>
                    <p className="quantity-desc">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                    </p>
                </div>
                <div className="buttons">
                    <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
                    <button type="button" className="buy-now" onClick="">Buy Now</button>
                </div>
            </div>
        </div>

        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>

    </div>
  )
}
export const getStaticPaths = async () => {
    // To get current slug of each single product. So we are saying, Give me all the products but only slug properties of them.
    const query = ` *[_type == "product"] {
        slug {
            current
        }
    } `

    // Based on that
    const products = await client.fetch(query);
    // Then we generate our paths
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    
    // getStaticProps runs in the background when using fallback: true. getStaticProps is called before initial render when using fallback: 'blocking'
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: {slug} }) => {
    // We only wanna fetch the first product that matches the ${slug} query
    const query = `*[_type == "product" && slug.current == '${slug}'][0] `;
    // We also wana fetch all the similar products
    const productsQuery = '*[_type == "product"]'
    // To get the individual product 
    const product = await client.fetch(query);
    // To get all query products
    const products = await client.fetch(productsQuery);

    return {
      props: { products, product }
    }
}

export default ProductDetails