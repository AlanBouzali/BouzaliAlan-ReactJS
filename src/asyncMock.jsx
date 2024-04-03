const products = [
  {
    id: '1',
    name: 'Tira de neon',
    price: '25000',
    category: 'iluminacion',
    img: '',
    stock: 23,
    description: '5m de tira de neon con fuente incluida.',
  },
  {
    id: '2',
    name: 'Dicroica Smart',
    price: '15000',
    category: 'electricidad',
    img: '',
    stock: 15,
    description: 'Lampara dicro 5w smart rgb.',
  },
  {
    id: '3',
    name: 'Cable 2,5mm',
    price: '60000',
    category: 'construccion',
    img: '',
    stock: 200,
    description: 'Cable unipolar 2,5mm Argenplas.',
  },
  {
    id: '4',
    name: 'Modulo Verona',
    price: '3000',
    category: 'electricidad',
    img: '',
    stock: 19,
    description: 'Tecla y enchufe Jeluz Platinum.',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(productId)));
    }, 2000);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 2000);
  });
};
