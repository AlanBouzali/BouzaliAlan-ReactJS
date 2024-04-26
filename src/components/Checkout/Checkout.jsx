import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {
  Timestamp,
  collection,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
import { CheckoutForm } from '../CheckoutForm/CheckoutForm';
import { getFirestore } from 'firebase/firestore';

export const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, steOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    const db = getFirestore();

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, 'items');

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), 'in', ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        steOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error('hay productos que estan fuera de stock');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Su orden se está generando...</h1>;
  }

  if (orderId) {
    return <h1>El ID de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};
