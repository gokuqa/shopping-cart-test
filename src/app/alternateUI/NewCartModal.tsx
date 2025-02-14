"use client";

import React, { useEffect, useState } from "react";
import {
  getCarrito,
  addProductToCart,
  deleteProductFromCart,
  removeAllProductsFromCart,
} from "../Data/Cart";
import styles from "../styles/NewCartModal.module.css";

// Definición de la interfaz Product
interface Product {
  code: string;
  name: string;
  price: number;
}

// Definición de las props para el componente NewCartModal
interface NewCartModalProps {
  handleClose: () => void;
  products: Product[];
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>;
}

// Componente funcional para el modal del carrito
const NewCartModal: React.FC<NewCartModalProps> = ({
  handleClose,
  products,
  setItemQuantity,
}) => {
  const [cartItems, setCartItems] = useState(getCarrito()); // Estado para los ítems del carrito
  const [name, setName] = useState(""); // Estado para el nombre del usuario
  const [phone, setPhone] = useState(""); // Estado para el teléfono del usuario
  const [formError, setFormError] = useState(""); // Estado para los errores del formulario

  // Efecto para actualizar los ítems del carrito al montar el componente
  useEffect(() => {
    setCartItems(getCarrito());
  }, []);

  // Función para obtener un producto por su código
  const getProductByCode = (code: string) => {
    return products.find((product) => product.code === code);
  };

  // Función para calcular el subtotal de un producto
  const calculateSubtotal = (price: number, quantity: number) => {
    return (price * quantity).toFixed(2);
  };

  // Función para calcular el total del carrito
  const calculateTotal = () => {
    const total = cartItems.reduce((total, item) => {
      const product = getProductByCode(item.code);
      if (product) {
        return total + product.price * item.quantity;
      }
      return total;
    }, 0);
    return total.toFixed(2); // Redondear a dos decimales
  };

  // Función para calcular el IVA
  const calculateIVA = (total: number) => {
    const iva = total * 0.16; // 16% IVA
    return iva.toFixed(2);
  };

  // Función para calcular el costo de envío
  const calculateShipping = (total: number) => {
    return total > 500 ? 0 : 50; // Envío gratuito para compras mayores a $500, de lo contrario $50
  };

  // Función para manejar la eliminación de un producto del carrito
  const handleRemoveFromCart = (productCode: string) => {
    removeAllProductsFromCart(productCode);
    const updatedCartItems = getCarrito();
    setCartItems(updatedCartItems);
    const totalQuantity = updatedCartItems.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  // Función para incrementar la cantidad de un producto en el carrito
  const handleIncrement = (productCode: string) => {
    addProductToCart(productCode);
    const updatedCartItems = getCarrito();
    setCartItems(updatedCartItems);
    const totalQuantity = updatedCartItems.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  // Función para decrementar la cantidad de un producto en el carrito
  const handleDecrement = (productCode: string) => {
    deleteProductFromCart(productCode);
    const updatedCartItems = getCarrito();
    setCartItems(updatedCartItems);
    const totalQuantity = updatedCartItems.reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  // Función para validar el nombre del usuario
  const validateName = () => {
    if (!name) {
      setFormError("Por favor, complete todos los campos.");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setFormError("Por favor, ingrese un nombre válido.");
      return false;
    }
    setFormError("");
    return true;
  };

  // Función para validar el teléfono del usuario
  const validatePhone = () => {
    if (!phone) {
      setFormError("Por favor, complete todos los campos.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setFormError("Por favor, ingrese un número de teléfono válido.");
      return false;
    }
    setFormError("");
    return true;
  };

  // Función para manejar el envío del formulario
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateName() && validatePhone()) {
      // Aquí puedes agregar la lógica para procesar el pago
      alert("Pago realizado con éxito");
    }
  };

  // Calcular los totales
  const total = parseFloat(calculateTotal());
  const iva = parseFloat(calculateIVA(total));
  const shipping = calculateShipping(total);
  const grandTotal = (total + iva + shipping).toFixed(2);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={handleClose} className={styles.closeButton}>
          &times;
        </button>
        <h2>Resumen del Carrito</h2>
        <div className={styles.content}>
          <div className={styles.cartItems}>
            {cartItems.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              cartItems.map((item) => {
                const product = getProductByCode(item.code);
                return product ? (
                  <div key={item.code} className={styles.cartItem}>
                    <div className={styles.cartItemDetails}>
                      <p className={styles.cartItemName}>{product.name}</p>
                      <p className={styles.cartItemInfo}>
                        <span>Precio individual:</span> ${product.price}
                      </p>
                      <p className={styles.cartItemSubtotal}>
                        <span>Subtotal:</span> $
                        {calculateSubtotal(product.price, item.quantity)}
                      </p>
                      <p className={styles.cartItemCode}>
                        <span>Código:</span> {product.code}
                      </p>
                    </div>
                    <div className={styles.quantityControls}>
                      <button
                        onClick={() => handleDecrement(item.code)}
                        className={styles.quantityButton}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.code)}
                        className={styles.quantityButton}
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveFromCart(item.code)}
                        className={styles.removeButton}
                      >
                        Vaciar
                      </button>
                    </div>
                  </div>
                ) : null;
              })
            )}
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={validateName}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={validatePhone}
                />
              </div>
              {formError && <p className={styles.formError}>{formError}</p>}
            </form>
            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span>Subtotal:</span> <span>${total.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem}>
                <span>IVA (16%):</span> <span>${iva.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Envío {"$500 o mas es gratis"}:</span>{" "}
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className={styles.summaryItem}>
                <span>Total:</span> <span>${grandTotal}</span>
              </div>
              <div className={styles.payButtonContainer}>
                <button type="submit" className={styles.payButton}>
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCartModal;
