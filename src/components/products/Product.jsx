import React, { Component } from "react";
import { imageBaseUrl } from "../../utils/constants";

class Product extends Component {
  state = {};
  render() {
    const { product } = this.props;
    return (
      <div>
        <div className="card">
          <img
            src={imageBaseUrl + product.thumbnail}
            className="card-img-top"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary btn-sm">
                {product.price}
              </button>
              <button className="btn btn-primary btn-sm">
                {product.discounted_price}
              </button>
            </div>
            <p className="card-text pt-2">{product.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
