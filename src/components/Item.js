// Item.js
import React, { useState } from "react";

function Item({ id, name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      {name}
      <button onClick={toggleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
