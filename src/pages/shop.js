import React, { useEffect, useState } from "react";
import { Product } from "../../components";
import { client } from "../../lib/client";

const SortButton = ({ sortType, onChange }) => {
  const options = [
    { value: "name-asc", label: "Name A-Z" },
    { value: "name-desc", label: "Name Z-A" },
    { value: "price-desc", label: "Price High-Low" },
    { value: "price-asc", label: "Price Low-High" }
  ];

  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="dropdown mb-3">
      <button
        className="btn btn-fill dropdown-toggle"
        style={{ padding: "5px 15px", margin: "auto"}}
        type="button"
        id="sort-button"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Sort by {sortType}
      </button>
      <div className="dropdown-menu" aria-labelledby="sort-button">
        {options.map((option) => (
          <button
            key={option.value}
            className="dropdown-item"
            onClick={() => handleChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

const Shop = ({ products, category }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchProduct, setSearchProduct] = useState("");
  const [numToShow, setNumToShow] = useState(8);
  const [sortType, setSortType] = useState("name-asc");

  const sortedProducts = filteredProducts.sort((a, b) => {
    const [sortBy, sortOrder] = sortType.split("-");
    if (sortBy === "name") {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
  });

  const handleShowMore = () => {
    setNumToShow(numToShow + 4);
  };
  const handleShowLess = () => {
    setNumToShow(8);
  };

  useEffect(() => {
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, category]);

  return (
    <div className="products-page">
      <div className="products-heading container m-auto mb-4">
        <h2>Products</h2>
        <p>
          We offer a wide variety of top-quality products, each crafted to meet
          your unique needs and preferences, ensuring your utmost satisfaction
          with every purchase.
        </p>
      </div>
      <div className="container d-flex justify-content-end">
        <div className="product-search-container me-1 pe-4">
          <input
            id="product-search "
            className="form-control"
            type="text"
            placeholder="Search product..."
            onChange={(e) => setSearchProduct(e.target.value)}
          />
        </div>
        <div>
          <SortButton sortType={sortType} onChange={setSortType} />
        </div>
      </div>
      <div className="products-container container">
        {sortedProducts
          ?.filter((p) => {
            const searchTerm = searchProduct.toLocaleLowerCase();
            const resultsName = p.name.toLocaleLowerCase();
            const resultsDetails = p.details.toLocaleLowerCase();
            return searchTerm === "" ? p : resultsName.includes(searchTerm) || resultsDetails.includes(searchTerm);
          })
          .slice(0, numToShow)
          .map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>

      <div className="show-more text-center mt-3">
        {numToShow < sortedProducts.length ? (
          <button className="btn btn-outline m-5" onClick={handleShowMore}>
            Show more
          </button>
        ) : (
          <button className="btn btn-outline m-5" onClick={handleShowLess}>
            Show less
          </button>
        )}
      </div>
    </div>
  );
};


export default Shop;

export const getServerSideProps = async ({ query }) => {
  const category = query.category || "";
  const queryStr = category
    ? `*[_type == "product" && category == "${category}"]`
    : `*[_type == "product"]`;
  const products = await client.fetch(queryStr);
  return {
    props: { products },
  };
};
