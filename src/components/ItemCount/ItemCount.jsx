import './Count.module.css';
import ClassCount from './Count.module.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, steQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      steQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      steQuantity(quantity - 1);
    }
  };

  return (
    <div className={ClassCount.Counter}>
      <div className={ClassCount.Controls}>
        <button className={ClassCount.Button} onClick={decrement}>
          -
        </button>
        <h4 className={ClassCount.Number}>{quantity}</h4>
        <button className={ClassCount.Button} onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className={ClassCount.ButtonAdd}
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
