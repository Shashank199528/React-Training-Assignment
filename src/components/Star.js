import React from "react";
import ReactStars from "react-rating-stars-component";

function Star(props) {
  // console.log(props.rating);
  return (
    <div>
      <ReactStars
        count={5}
        value={props.rating}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
}

export default Star;
