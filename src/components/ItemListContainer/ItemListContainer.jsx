import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;

    if (!categoryId) {
      refCollection = collection(db, 'items');
    } else {
      refCollection = query(
        collection(db, 'items'),
        where('categoryId', '==', categoryId)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log('no results');
      else
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [categoryId]);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
