import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div>
        <p className="description">
          You are on amazon.com. You can also shop on Amazon Iran for millions
          of products with fast local delivery. Click here to go to amazon.de
        </p>
      </div>
      <div className="container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <hr />
            <div>
              <span className="dollor-sign">$</span>
              <span className="price-discount"><strong>{product.priceDiscount}</strong></span>
              <span className="num">99</span>
            </div>
            <p className="last-price">${product.lastPrice}</p>
            <p>{product.desc}</p>
            <div>
              <div></div>
              <p>1,752</p>
            </div>
            <p className="see-more">
              <Link to={`/product/${product.id}`}>see more ...</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
