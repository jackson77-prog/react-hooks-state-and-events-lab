import React, { useState } from 'react';

function Item({ item }) {
  const [inCart, setInCart] = useState(false);

  const toggleCartStatus = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {item.name}
      <button onClick={toggleCartStatus}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
