import ClassItem from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ id, title, imageId, price, description, stock }) => {
  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{title}</h2>
      </header>
      <picture>
        <img src={imageId} alt={title} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Precio: ${price}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className={ClassItem.ItemFooter}>
        <Link to={`/item/${id}`} className={ClassItem.ButtonDetail}>
          Ver detalle
        </Link>
      </footer>
    </article>
  );
};
export default Item;
