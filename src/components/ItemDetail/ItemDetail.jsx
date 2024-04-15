//import ClassItem from '../Item/Item.module.css';
import { useState } from 'react';
import ClassItem from '../ItemDetail/Detail.module.css';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
  };

  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoría: {category}</p>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Descripción: {description}</p>
      </section>
      <footer className="ItemFooter">
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
