
import cart from '../../assets/Images/cartWidgetIcon.png';
export const CartWidget = () => {
  return (
    <div id='cart-widget'>
      <img src={cart} alt="Carrito de Compras" width={40} />
      <span>0</span>
    </div>
  );
};
