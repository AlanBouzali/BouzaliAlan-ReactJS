import ClassItem from '../Item/Item.module.css';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <article className={ClassItem.CardItem}>
      <header className="Header">
        <h2 className="ItemHeader">{name}No funciona</h2>
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
        <p className="Info">Stock disponible: {stock}</p>
        <ItemCount
          id={id}
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}
        />
      </footer>
    </article>
  );
};
export default ItemDetail;
