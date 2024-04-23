//import ClassItem from '../Item/Item.module.css';
import { useContext, useState } from 'react';
import ClassItem from '../ItemDetail/Detail.module.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, quantity);
  };

  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <div className={ClassItem.ContainerDetail}>
        <picture>
          <img src={img} alt={name} className={ClassItem.ItemImg} />
        </picture>
        <section className="Description">
          <p className="Info">Categoría: {category}</p>
          <p className="Info">Precio: ${price}</p>
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
        {/*   <p className="Info">Stock disponible: {stock}</p>
        <ItemCount
          id={id}
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
        /> */}
      </footer>
    </article>
  );
};
export default ItemDetail;
