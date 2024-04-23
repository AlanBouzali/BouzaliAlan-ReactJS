import ClassModule from '../CartItem/CartItem.module.css';
import { CartContext } from '../../context/CartContext';
import { Cart } from '../Cart/Cart.jsx';

export const CartItem = ({ name, img, price, quantity }) => {
  const totalPrice = price * quantity;
  return (
    <div className={ClassModule.ContainerItem}>
      <img src={img} alt={name} /* className={ClassModule.imgCart} */ />
      <h1 className={ClassModule.Title}>{name}</h1>
      <h2 className={ClassModule.Title}>{price}</h2>
      <h2 className={ClassModule.Title}>{totalPrice}</h2>
    </div>
  );
};
