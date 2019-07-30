import React, { Component } from "react";
import Navbar from "../components/layouts/Navbar";
import ProductList from "../components/products/ProductList";
import { categories } from "../services/fakeServices/categories";
import Pagination from "../components/common/pagination";
import { products } from "../services/fakeServices/products";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";

class Home extends Component {
  state = {
    categories: [],
    selectedItem: {},
    products: [],
    currentPage: 1,
    pageSize: 5,
    totalItem: 0
  };

  componentDidMount() {
    const allCategories = [
      { name: "All Items", category_id: "x" },
      ...categories.rows
    ];
    this.setState({
      categories: allCategories,
      products: products.rows,
      totalItem: products.rows.length
    });
  }

  handleSelectItem = item => {
    this.setState({ selectedItem: item, currentPage: 1 });
  };

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
        <Navbar />
        <div className="container-fluid py-3">
          <div className="row">
            <div className="col-2">
              <h4>Categories</h4>
              <ListGroup
                items={this.state.categories}
                selectedItem={this.state.selectedItem}
                onSelectItem={this.handleSelectItem}
              />
            </div>
            <div className="col-10">
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
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
