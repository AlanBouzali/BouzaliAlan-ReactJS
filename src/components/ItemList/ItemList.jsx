import ItemModule from './ItemList.module.css';
import Item from '../Item/Item.jsx';

const ItemList = ({ products }) => {
  return (
    <div className={ItemModule.ListGroup}>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
