import React from "react";
import styles from "../styles/NewHeader.module.css";

// Definición de las propiedades que el componente NewHeader espera recibir
interface NewHeaderProps {
  setShowCartResume: React.Dispatch<React.SetStateAction<boolean>>;
  itemQuantity: number;
}

// Componente funcional para el encabezado de la tienda
const NewHeader: React.FC<NewHeaderProps> = ({
  setShowCartResume,
  itemQuantity,
}) => {
  return (
    <header className={styles.header}>
      {/* Título de la tienda */}
      <div className={styles.title}>Shopping Cart</div>

      {/* Botón para ver el carrito */}
      <button
        onClick={() => setShowCartResume(true)}
        className={styles.cartButton}
      >
        {/* Icono del carrito */}
        <svg
          className={styles.cartIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M7 4V2a2 2 0 1 1 4 0v2h2V2a2 2 0 1 1 4 0v2h1a1 1 0 0 1 1 1v2h-1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7H3V5a1 1 0 0 1 1-1h1zm2 0h6V2H9v2zm-1 4h8v11H8V8z" />
        </svg>
        Ver carrito
        {/* Cantidad de ítems en el carrito */}
        <span className={styles.cartCount}>{itemQuantity}</span>
      </button>
    </header>
  );
};

export default NewHeader;
