import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import '../ItemDetailContainer/DetailContainer.module.css';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, 'items', itemId);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
