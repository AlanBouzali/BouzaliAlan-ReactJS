import { createContext, useState } from 'react';

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0, //agregado
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  console.log(cart);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error('El producto ya fue agregado!');
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  let total = 0;
  const calculateTotal = () => {
    total = 0;
    cart.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  };
  calculateTotal();
  console.log(total);

  //agregado
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        total,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
