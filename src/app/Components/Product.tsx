"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { addProductToCart, deleteProductFromCart } from "../Data/Cart";
import "../styles/product.css";

// Definimos las propiedades del componente con TypeScript para mayor claridad y seguridad
interface ProductProps {
  srcImage: string; // Ruta de la imagen del producto
  title: string; // Título o nombre del producto
  code: string; // Código único del producto
  price: number; // Precio del producto
  itemQuantity: number; // Cantidad actual de productos en el carrito
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>; // Función para actualizar la cantidad total de productos en el carrito
}

export const Product = ({
  srcImage,
  title,
  code,
  price,
  itemQuantity,
  setItemQuantity,
}: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  // Función optimizada para actualizar la cantidad
  const updateQuantity = useCallback(
    (increment: boolean) => {
      const newQuantity = increment ? quantity + 1 : quantity - 1;

      if (newQuantity >= 0) {
        setQuantity(newQuantity);
        if (increment) {
          addProductToCart(code);
          setItemQuantity(itemQuantity + 1);
        } else {
          deleteProductFromCart(code);
          setItemQuantity(itemQuantity - 1);
        }
      }
    },
    [quantity, code, itemQuantity, setItemQuantity]
  );

  return (
    <div className="Product">
      <div className="imageContainer">
        {/* Enlace a la imagen, abre en una nueva pestaña */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="link-style-shadow"
        >
          <Image
            src={srcImage}
            alt={`Photo of ${title} product`}
            width={500}
            height={500}
          />
        </a>
      </div>

      <div className="infoContainer">
        <div className="title">
          {/* Mostramos el título del producto */}
          <h3>{title}</h3>
        </div>
        <div className="code">
          {/* Mostramos el código único del producto */}
          <span>Code: #{code}</span>
        </div>
        <div className="pricesContainer">
          <div className="price">
            {/* Mostramos el precio del producto */}
            <span>${price}</span>
          </div>
          {/* Si la cantidad del producto es mayor a 0, mostramos el total por producto */}
          {quantity > 0 && (
            <div className="price">
              <span>${(price * quantity).toFixed(2)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="quantityContainer">
        <div>
          {/* Botón para restar cantidad del producto */}
          <button
            onClick={() => updateQuantity(false)}
            aria-label="Decrement quantity"
          >
            -
          </button>
          {/* Mostramos la cantidad actual del producto en el carrito */}
          <span>{quantity}</span>
          {/* Botón para sumar cantidad del producto */}
          <button
            onClick={() => updateQuantity(true)}
            aria-label="Increment quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
