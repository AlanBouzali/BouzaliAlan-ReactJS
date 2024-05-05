import '../Cart/Cart.module.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { CartForm } from '../CartForm/CartForm';

export const Cart = () => {
  const { cart, clearCart, totalQuantity, calculateTotal, total } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito.</h1>
        <Link to="/" className="Options">
          Productos
        </Link>
      </div>
    );
  }
  console.log(total);
  return (
    <div>
      {cart.map((p) => {
        console.log(p);
        return <CartItem key={p.id} {...p} />;
      })}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};
