import ClassItem from './Item.module.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, img, price, stock }) => {
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
        <p className="Info">Stock disponible: {stock}</p>
      </section>
      <footer className="ItemFooter">
        <button className="Option">Ver detalle</button>
      </footer>
      <ItemCount
        initial={1}
        stock={25}
        onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
      />
    </article>
  );
};
export default Item;
