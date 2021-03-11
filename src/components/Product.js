import React, { Fragment } from "react";
import Star from "./Star";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <tr>
          <td className="image-div-hgt">
            {this.props.showHideImage ? (
              <img
                height="60"
                src={this.props.item.imageUrl}
                alt={this.props.item.imageUrl}
              />
            ) : null}
          </td>
          <td>
            <a
              href="#"
              onClick={() => this.props.showProductDetails(this.props.item)}
            >
              {this.props.item.productName}
            </a>
          </td>
          <td>{this.props.item.productCode}</td>
          <td>{this.props.item.description}</td>
          <td>{this.props.item.price}</td>
          <td>
            <Star rating={this.props.item.starRating} />
          </td>
        </tr>
      </>
    );
  }
}

export default Product;
