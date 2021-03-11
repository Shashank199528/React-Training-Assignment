import React from "react";
import Star from "./Star";

function ProductDetails(props) {
  // console.log(props);
  return (
    <div>
      <h2 className="text-center py-3">Product Details Component</h2>
      <div className="container border border-secondary rounded-sm">
        <div className="d-flex justify-content-between p-3">
          <div className="w-60">
            <div className="d-flex">
              <div className="w-50">Name:</div>
              <div>{props.productDetails.productName}</div>
            </div>
            <div className="d-flex">
              <div className="w-50">Code:</div>
              <div>{props.productDetails.productCode}</div>
            </div>
            <div className="d-flex">
              <div className="w-50">Description:</div>
              <div>{props.productDetails.description}</div>
            </div>
            <div className="d-flex">
              <div className="w-50">Availability:</div>
              <div>{props.productDetails.productName}</div>
            </div>
            <div className="d-flex">
              <div className="w-50">Price:</div>
              <div>${props.productDetails.price}</div>
            </div>
            <div className="d-flex">
              <div className="w-50">Product Rating:</div>
              <div>
                {" "}
                <Star rating={props.productDetails.starRating} />
              </div>
            </div>
          </div>
          <div>
            <img
              className="product-img-hgt"
              src={props.productDetails.imageUrl}
              alt={props.productDetails.imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
