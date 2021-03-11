import React from "react";
import Welcome from "./Welcome";
import Product from "./Product";
import ProductDetails from "./ProductDetails";
import Search from "./Search";
import ToggleImage from "./ToggleImage";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      activeMenu: "",
      showPrdDtls: false,
      pdpDtls: {},
      showHideImage: false,
      inputValue: "",
    };
  }

  componentDidMount() {
    this.setState({
      product: this.props.product,
    });
  }

  // show proudct details function
  showProductDetails = (item) => {
    // console.log("inside product details", item);
    this.setState({
      pdpDtls: item,
      showPrdDtls: true,
    });
  };

  // show or hide image function
  toggleImageFn = () => {
    // console.log(1234);
    this.setState({
      showHideImage: !this.state.showHideImage,
    });
  };

  // search product function
  searchProduct = (e) => {
    let searchInputValue = e.target.value;
    console.log(searchInputValue);
    searchInputValue = searchInputValue.trimLeft();
    this.setState({
      inputValue: searchInputValue,
    });
  };

  render() {
    return (
      <div>
        {this.state.showPrdDtls ? (
          <ProductDetails productDetails={this.state.pdpDtls} />
        ) : (
          <div>
            <Welcome title="Product List" />
            <div className="container">
              <div className="mb-3">
                <Search
                  type="text"
                  name="Filter By"
                  inputValue={this.state.inputValue}
                  searchProduct={this.searchProduct}
                />
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <ToggleImage toggleImageFn={this.toggleImageFn} />
                    </th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Description</th>
                    <th>price</th>
                    <th>Star Rating</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.product
                    .filter((item) => {
                      return item.productName
                        .toLowerCase()
                        .includes(this.state.inputValue.toLowerCase());
                    })
                    .map((item, index) => (
                      <Product
                        key={index}
                        item={item}
                        showHideImage={this.state.showHideImage}
                        showProductDetails={(value) =>
                          this.showProductDetails(value)
                        }
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductList;
