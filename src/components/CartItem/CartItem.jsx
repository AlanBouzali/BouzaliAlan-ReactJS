import ClassModule from '../CartItem/CartItem.module.css';

export const CartItem = ({ title, imageId, price, quantity }) => {
  const totalPrice = price * quantity;
  return (
    <div className={ClassModule.ContainerItem}>
      <img src={imageId} alt={title} />
      <h1 className={ClassModule.Title}>{title}</h1>
      <h2 className={ClassModule.Title}>{price}</h2>
      <h2 className={ClassModule.Title}>x{quantity}</h2>
      <h2 className={ClassModule.Title}>{totalPrice}</h2>
    </div>
  );
};
