import { useEffect, useState } from 'react';
//import Container from 'react-bootstrap/Container';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}; //<Container className='mt-4'><h2>{greeting}</h2></Container>;

export default ItemListContainer;
