import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

export const CartForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (ev) => {
    setValues();
  };

  return (
    <form>
      <label>Nombre</label>
      <label
        type="text"
        value={values.name}
        name="name"
        onChange={handleChange}
      ></label>
      <label>Teléfono</label>
      <label
        type="text"
        value={values.phone}
        name="phone"
        onChange={handleChange}
      ></label>
      <label>E-mail</label>
      <label
        type="email"
        value={values.email}
        name="email"
        onChange={handleChange}
      ></label>
    </form>
  );
};
