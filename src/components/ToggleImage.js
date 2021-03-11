import React from "react";

function ToggleImage({ toggleImageFn }) {
  return (
    <button
      type="button"
      className="btn btn-primary mr-2"
      onClick={toggleImageFn}
    >
      Toggle Image
    </button>
  );
}

export default ToggleImage;
