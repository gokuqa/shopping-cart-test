// Definimos una interfaz para los productos con las propiedades necesarias
interface Product {
  srcImage: string; // Ruta de la imagen
  title: string; // Nombre del producto
  code: string; // Código único del producto
  price: number; // Precio del producto
}

// Array de productos, cada uno siguiendo la estructura definida por la interfaz Product
export const Products: Product[] = [
  {
    srcImage: "/images/1.jpg", // Ruta de la imagen
    title: "Laptop", // Nombre del producto
    code: "4122", // Código del producto
    price: 999.99, // Precio del producto
  },
  {
    srcImage: "/images/2.jpg",
    title: "Smartphone",
    code: "512",
    price: 799.99,
  },
  {
    srcImage: "/images/3.jpg",
    title: "Headphones",
    code: "55222",
    price: 199.99,
  },
  {
    srcImage: "/images/4.jpg",
    title: "Smartwatch",
    code: "51225",
    price: 149.99,
  },
  {
    srcImage: "/images/5.jpg",
    title: "Bluetooth Speaker",
    code: "74325",
    price: 59.99,
  },
  {
    srcImage: "/images/6.jpg",
    title: "External Hard Drive",
    code: "1256",
    price: 89.99,
  },
  {
    srcImage: "/images/7.jpg",
    title: "Wireless Mouse",
    code: "8865",
    price: 29.99,
  },
];
