import ClassModule from '../CartItem/CartItem.module.css';
import { CartContext } from '../../context/CartContext';
import { Cart } from '../Cart/Cart.jsx';

export const CartItem = ({ title, imageId, price, quantity }) => {
  const totalPrice = price * quantity;
  return (
    <div className={ClassModule.ContainerItem}>
      <img src={imageId} alt={title} /* className={ClassModule.imgCart} */ />
      <h1 className={ClassModule.Title}>{title}</h1>
      <h2 className={ClassModule.Title}>{price}</h2>
      <h2 className={ClassModule.Title}>{totalPrice}</h2>
    </div>
  );
};
