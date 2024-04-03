import ClassItem from './Item.module.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, description, stock }) => {
  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
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
      {/* {
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
        />
      } */}
    </article>
  );
};
export default Item;
