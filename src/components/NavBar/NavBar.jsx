import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = () => {
  return (
    <>
      <h1>Ecommerce Alan</h1>
      <ul>
        <li>
          <a href="">Electricidad</a>
        </li>
        <li>
          <a href="">Construcción</a>
        </li>
        <li>
          <a href="">Iluminación</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
};
