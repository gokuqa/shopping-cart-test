"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { getCarrito } from "../Data/Cart";
import styles from "../styles/NewProductsContainer.module.css";

// Interfaz para definir la estructura de un producto
interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  code: string;
}

// Propiedades que el componente NewProductsContainer espera recibir
interface NewProductsContainerProps {
  products: Product[];
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleAddProduct: (productCode: string) => void;
  handleDeleteProduct: (productCode: string) => void;
}

// Componente principal para mostrar los productos
const NewProductsContainer: React.FC<NewProductsContainerProps> = ({
  products,
  setItemQuantity,
  handleAddProduct,
  handleDeleteProduct,
}) => {
  // Estado para almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState(getCarrito());

  // Función para agregar un producto al carrito
  const handleAddToCart = (productCode: string) => {
    handleAddProduct(productCode);
    updateItemQuantity();
  };

  // Función para eliminar un producto del carrito
  const handleRemoveFromCart = (productCode: string) => {
    handleDeleteProduct(productCode);
    updateItemQuantity();
  };

  // Función para actualizar la cantidad de productos en el carrito
  const updateItemQuantity = () => {
    const updatedCartItems = getCarrito();
    setCartItems(updatedCartItems);
    const totalQuantity = updatedCartItems.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  // useeffect para actualizar la cantidad de productos al montar el componente
  useEffect(() => {
    updateItemQuantity();
  }, []);

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        // Verificar si el producto está en el carrito y si se puede eliminar
        const cartItem = cartItems.find(item => item.code === product.code);
        const isRemoveDisabled = !cartItem || cartItem.quantity === 0;

        return (
          <div key={product.id} className={styles.productCard}>
            <Image src={product.imageUrl} alt={product.name} className={styles.productImage} width={500} height={500} />
            <div className={styles.productDetails}>
              <h3>{product.name}</h3>
              <p className={styles.productPrice}>Precio: ${product.price}</p>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => handleAddToCart(product.code)}
                  className={styles.addToCartButton}
                >
                  Agregar
                </button>
                <button
                  onClick={() => handleRemoveFromCart(product.code)}
                  className={`${styles.removeFromCartButton} ${isRemoveDisabled ? styles.disabledButton : styles.activeButton}`}
                  disabled={isRemoveDisabled}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewProductsContainer;
