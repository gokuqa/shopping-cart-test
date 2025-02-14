"use client";

import { useEffect, useState } from "react";
import { getCarrito } from "../Data/Cart";
import { Products } from "../Data/Products";
import styles from "../styles/CartModal.module.css"; // Cambiado a un módulo CSS
import { postData } from "../Data/POST";

interface CartModalProps {
  handleClose: () => void;
}

export const CartModal = ({ handleClose }: CartModalProps) => {
  const [totalPrice, setTotalPrice] = useState<string>("0.00");

  const calculateTotalPrice = (): string => {
    const productsMap = Products.reduce((map, product) => {
      map[product.code] = product.price;
      return map;
    }, {} as Record<string, number>);

    const total = getCarrito()
      .reduce((total, item) => {
        const productPrice = productsMap[item.code] || 0;
        return total + item.quantity * productPrice;
      }, 0)
      .toFixed(2);

    return total;
  };

  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  }, []);

  const handleProceed = () => {
    postData(getCarrito());
    handleClose();
  };

  return (
    <div className={styles.CartModal}>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button onClick={handleClose} aria-label="Close cart modal">
            Close
          </button>
          <span>Total: $ {totalPrice}</span>
        </div>
        <button
          className={styles.proceed}
          onClick={handleProceed}
          aria-label="Proceed to buy"
        >
          Proceed to buy
        </button>
      </div>
    </div>
  );
};
