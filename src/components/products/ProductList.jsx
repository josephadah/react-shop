import React, { Component } from "react";
import Product from "./Product";
import Pagination from "../common/pagination";
import { products } from "../../services/fakeServices/products";
import { paginate } from "../../utils/paginate";

class ProductList extends Component {
  state = {
    products: [],
    currentPage: 1,
    pageSize: 5,
    totalItem: 0
  };

  componentDidMount() {
    this.setState({ products: products.rows, totalItem: products.rows.length });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePreviousPage = () => {
    if (this.state.currentPage !== 1) {
      this.setState({ currentPage: this.state.currentPage - 1 });
    }
  };

  handleNextPage = () => {
    if (
      this.state.currentPage !==
      Math.ceil(this.state.totalItem / this.state.pageSize)
    ) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  };

  render() {
    const {
      currentPage,
      pageSize,
      totalItem,
      products: allProducts
    } = this.state;
    const products = paginate(currentPage, pageSize, allProducts);

    return (
      <div>
        <div className="d-flex justify-content-center">
          <Pagination
            currentPage={currentPage}
            pageSize={pageSize}
            totalItem={totalItem}
            onPageChange={this.handlePageChange}
            onPreviousPage={this.handlePreviousPage}
            onNextPage={this.handleNextPage}
          />
        </div>
        <div className="row">
          {products.map(product => (
            <div className="col-3 pb-3" key={product.product_id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
