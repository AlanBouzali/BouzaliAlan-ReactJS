//import ClassItem from '../Item/Item.module.css';
import { useContext, useState } from 'react';
import ClassItem from '../ItemDetail/Detail.module.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({
  id,
  title,
  imageId,
  categoryId,
  description,
  price,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      title,
      categoryId,
      price,
      imageId,
      stock,
    };

    addItem(item, quantity);
  };

  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{title}</h2>
      </header>
      <div className={ClassItem.ContainerDetail}>
        <picture>
          <img src={imageId} alt={title} className={ClassItem.ItemImg} />
        </picture>
        <section className="Description">
          <p className="Info">Categoría: {categoryId}</p>
          <p className="Info">Precio: ${price}</p>
          <p className="Info">Stock: {stock}</p>
          <p className="Info">Descripción: {description}</p>
        </section>
      </div>
      <footer className={ClassItem.ItemFooter}>
        {quantityAdded > 0 ? (
          <Link to="/cart" className={ClassItem.ButtonDetail}>
            Terminar compra
          </Link>
        ) : (
          <ItemCount id={id} initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};
export default ItemDetail;
