const products = [
  {
    id: '1',
    name: 'Tira de neon',
    price: '25000',
    category: 'iluminacion',
    img: 'https://i.ibb.co/7b9P8LZ/neon-derecha.jpg',
    stock: 23,
    description:
      '5m de tira de neon con fuente incluida, es una excelente aliada para disminuir el consumo energético. Se trata de una iluminación que abre múltiples posibilidades para la decoración de cada rincón de tu casa ya que, gracias a su flexibilidad, tendrás la posibilidad de adaptarlas a distintos relieves y a espacios reducidos como esquinas y zócalos.',
  },
  {
    id: '2',
    name: 'Lámpara value Osram',
    price: '1500',
    category: 'electricidad',
    img: 'https://i.ibb.co/h9QHb1H/7-osram-izq.jpg',
    stock: 15,
    description:
      'Lampara Osram 7w es una bombilla de bajo consumo fabricada por la marca Osram. Tiene una potencia de 7W, pero es equivalente a una bombilla incandescente de 60W en términos de brillo. Esta lámpara es ideal para ahorrar energía y reducir los costos de electricidad, ya que consume menos energía pero proporciona una iluminación equivalente a las bombillas tradicionales de mayor potencia.',
  },
  {
    id: '3',
    name: 'Cable 2,5mm',
    price: '60000',
    category: 'construccion',
    img: 'https://i.ibb.co/Wyv6y9Q/5-cable-centro.jpg',
    stock: 200,
    description:
      'El cable de instalación de la marca Argenplas es una opción confiable y segura para tus necesidades eléctricas. Con materiales de alta calidad y un diseño resistente, este cable garantiza un rendimiento óptimo en diversas aplicaciones. Su fácil manipulación y excelente conductividad lo convierten en la elección ideal para proyectos eléctricos tanto en entornos domésticos como comerciales. Confía en la marca Argenplas para una instalación eléctrica eficiente y segura.',
  },
  {
    id: '4',
    name: 'Modulo Verona',
    price: '3000',
    category: 'electricidad',
    img: 'https://i.ibb.co/pnj0sZx/2-verona-Plat-centro.jpg',
    stock: 19,
    description:
      'El módulo Jeluz Verona Platinum es la opción ideal para quienes buscan un equilibrio entre estilo y funcionalidad en sus espacios. Con un diseño elegante y moderno, este módulo garantiza un alto estándar de calidad y resistencia. Tanto residencial como comercial, proporciona una solución de alto rendimiento. Su instalación simple lo convierten en la elección perfecta de hogar.',
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
      resolve(products.find((prod) => prod.id === productId));
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
