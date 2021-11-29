import { useState } from "react";
import "./styles.scss";

const ProductQuantityInput = () => {
  const [qty, setQty] = useState(0);
  const remove = () => {
    if (qty === 0) return;
    setQty(qty - 1);
  };
  const add = () => {
    setQty(qty + 1);
  };
  return (
    <div className="product-qty-container">
      <button
        onClick={() => {
          remove();
        }}
        type="button"
        className="btn-qty remove"
      >
        -
      </button>
      <input className="btn-qty input" name="quantity" value={qty} />
      <button
        onClick={() => {
          add();
        }}
        type="button"
        className="btn-qty add"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantityInput;
