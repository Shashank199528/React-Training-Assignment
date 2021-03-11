import React from "react";
import FormInput from "./FormInput";
// class component example
class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      productname: "",
      productcode: "",
      productImageLink: "",
      starrating: "",
      price: "",
      description: "",
    };
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const imgLink = event.target.elements.link.value;
    const productname = event.target.elements.productname.value;
    const description = event.target.elements.description.value;
    const productcode = event.target.elements.productcode.value;
    const price = event.target.elements.price.value;
    const starrating = event.target.elements.starrating.value;

    const product = {
      productId: Number(new Date()),
      productName: productname,
      link: imgLink,
      description: description,
      productcode: productcode,
      price: price,
      starRating: starrating,
    };
    // console.log(product);
    this.props.addPdt(product);
    if (
      productname &&
      imgLink &&
      description &&
      productcode &&
      price &&
      starrating
    ) {
      // this.props.onAddProduct(product);
    }
  };

  onChange(e) {
    // console.log(e.target.value + "" + e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  }

  render() {
    return (
      <div className="container w-50">
        <h2 className="mt-3">Add Product component</h2>
        <form onSubmit={this.handleOnSubmit}>
          <FormInput
            type="text"
            name="productname"
            onChange={(value) => this.onChange(value)}
          />
          <FormInput
            type="text"
            name="productcode"
            onChange={(value) => this.onChange(value)}
          />
          <FormInput
            type="text"
            name="link"
            onChange={(value) => this.onChange(value)}
          />
          <FormInput
            type="text"
            name="starrating"
            onChange={(value) => this.onChange(value)}
          />
          <FormInput
            type="text"
            name="price"
            onChange={(value) => this.onChange(value)}
          />
          <FormInput
            type="text"
            name="description"
            onChange={(value) => this.onChange(value)}
          />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
