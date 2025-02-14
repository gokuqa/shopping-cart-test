"use client";

import { useEffect, useState } from "react";
import { getCarrito } from "../Data/Cart";
import { Products } from "../Data/Products";
import "../styles/cartModal.css";
import { postData } from "../Data/POST";

// Definimos las propiedades del componente con TypeScript para mayor claridad y seguridad
interface CartModalProps {
  handleClose: () => void; // Función que maneja el cierre del modal
}

export const CartModal = ({ handleClose }: CartModalProps) => {
  // Estado que guarda el precio total del carrito
  const [totalPrice, setTotalPrice] = useState<string>("0.00");

  // Función para calcular el total del carrito
  const calculateTotalPrice = (): string => {
    // Crear un mapa de productos donde la clave es el código del producto
    const productsMap = Products.reduce((map, product) => {
      map[product.code] = product.price;
      return map;
    }, {} as Record<string, number>);

    // Calcular el total sumando el precio de cada producto multiplicado por su cantidad
    const total = getCarrito()
      .reduce((total, item) => {
        const productPrice = productsMap[item.code] || 0;
        return total + item.quantity * productPrice;
      }, 0)
      .toFixed(2); // Asegura dos decimales

    return total;
  };

  // useEffect que se ejecuta solo una vez al montar el componente
  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total); // Actualiza el estado con el total calculado
  }, []); // Este useEffect solo se ejecuta una vez, cuando el componente se monta

  // Función para manejar el proceso de compra
  const handleProceed = () => {
    postData(getCarrito()); // Simulación de enviar datos del carrito al backend
    handleClose(); // Cerrar el modal después de proceder con la compra
  };

  return (
    <div className="CartModal">
      <div className="container">
        <div className="buttons">
          {/* Botón para cerrar el modal */}
          <button onClick={handleClose} aria-label="Close cart modal">
            Close
          </button>
          {/* Mostrar el precio total del carrito */}
          <span>Total: $ {totalPrice}</span>
        </div>
        {/* Botón para proceder con la compra */}
        <button
          className="proceed"
          onClick={handleProceed}
          aria-label="Proceed to buy"
        >
          Proceed to buy
        </button>
      </div>
    </div>
  );
};
