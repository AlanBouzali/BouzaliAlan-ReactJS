import ItemModule from './ItemList.module.css';
import Item from '../Item/Item.jsx';

const ItemList = ({ products }) => {
  return (
    <div className={ItemModule.ListGroup}>
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
