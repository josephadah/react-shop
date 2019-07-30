import React from "react";
import Product from "./Product";

const productList = props => {
  return (
    <div className="row">
      {props.products.map(product => (
        <div className="col-3 pb-3" key={product.product_id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default productList;
