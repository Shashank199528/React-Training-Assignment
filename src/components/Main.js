import { render } from "@testing-library/react";
import React from "react";
import data from "../data/ProductsData";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import Welcome from "./Welcome";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: "home",
      product: [],
    };
  }

  componentDidMount() {
    const productListData = data;
    this.setState({
      product: productListData,
    });
  }

  // navigate menu function
  navigateMenu = (menu) => {
    // console.log("inside navigate menu");
    this.setState({
      activeMenu: menu,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="jumbotron-fluid">
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <a className="navbar-brand" href="#">
              Dashboard
            </a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => this.navigateMenu("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => this.navigateMenu("productList")}
                >
                  Product List
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => this.navigateMenu("addProduct")}
                >
                  Add Product
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {this.state.activeMenu === "home" ? (
          <div className="jumbotron jumbotron-fluid mb-0 height-100">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-md-10 col-lg-6">
                  <Welcome title="Welcome To React App" />
                  <div className="py-3">
                    <div>Developed By:</div>
                    <div>Shashank</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : this.state.activeMenu === "productList" ? (
          <ProductList product={this.state.product} />
        ) : this.state.activeMenu === "addProduct" ? (
          <AddProduct
            addPdt={(value) => {
              // console.log(value);
              this.setState({
                product: [
                  ...this.state.product,
                  {
                    productId: value.productId,
                    description: value.description,
                    link: value.link,
                    productName: value.productName,
                    productCode: value.productcode,
                    starRating: value.starRating,
                    price: value.price,
                  },
                ],
              });
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default Main;
