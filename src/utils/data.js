const products = [
  {
    id: 1,
    name: "Vestido.1",
    category: "vestidos",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://www.bronze.com.ar/wp-content/uploads/2023/09/IMG_4607-e1697110319749.jpeg",
    stock: 10,
  },
  {
    id: 2,
    name: "Vestido.2",
    category: "vestidos",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://i.pinimg.com/736x/a1/3f/2c/a13f2cfe6a1658a84e3e01f3497cfc5e.jpg",
    stock: 10,
  },
  {
    id: 3,
    name: "Vestido.3",
    category: "vestidos",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://cbu01.alicdn.com/img/ibank/O1CN013Xee972FEtZ3DaHir_!!2208406698849-0-cib.jpg_640x640q90.jpg?__r__=1662204308879",
    stock: 10,
  },
  {
    id: 4,
    name: "Remera",
    category: "remeras",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://static.wixstatic.com/media/880221_a2bb33e741f54527a38625de0a0bfa0b~mv2.png/v1/fill/w_563,h_990,al_c,q_90,enc_auto/880221_a2bb33e741f54527a38625de0a0bfa0b~mv2.png",
    stock: 10,
  },
  {
    id: 5,
    name: "Pantalon",
    category: "sastreros",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://static.wixstatic.com/media/880221_a2bb33e741f54527a38625de0a0bfa0b~mv2.png/v1/fill/w_563,h_990,al_c,q_90,enc_auto/880221_a2bb33e741f54527a38625de0a0bfa0b~mv2.png",
    stock: '10',
  },
  {
    id: 6,
    name: "Camisa",
    category: "camisas",
    description: "ashdghasdghasgdsdga",
    price: 7000,
    image:
      "https://4e61c32e04.clvaw-cdnwnd.com/a5738bcec61e49cfd179774d9a681db9/200001150-eea7ceea7e/IMG_8600.JPG?ph=4e61c32e04",
    stock: 10,
  },
];

// filtro de categorias para que no se repitan en navbar
const categories = products.map((cat) => cat.category);

export const listCategory = categories.filter((category, id) => {
  return categories.indexOf(category) === id;
});

export const getProducts = () => {
  return new Promise((res, rec) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((res) => {
    const filteredProducts = products.filter(
      (product) => product.category === categoryId
    );
    setTimeout(() => {
      res(filteredProducts);
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((res) => {
    const productF = products.find(
      (product) => product.id === parseInt(productId)
    );
    setTimeout(() => {
      res(productF);
    }, 1000);
  });
}