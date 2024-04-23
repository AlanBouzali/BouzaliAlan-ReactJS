import { useContext } from 'react';
import cart from '../../assets/Images/cartWidgetIcon.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link
      to="/cart"
      id="cart-widget"
      style={{ display: totalQuantity > 0 ? 'block' : 'none' }}
    >
      <img src={cart} alt="Carrito de Compras" width={40} />
      {totalQuantity}
    </Link>
  );
};
