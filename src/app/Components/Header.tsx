import "../styles/header.css";
import Image from "next/image";

// Definimos las propiedades del componente con TypeScript para mayor claridad y seguridad
interface HeaderProps {
  setShowCartResume: React.Dispatch<React.SetStateAction<boolean>>; // Función para mostrar el resumen del carrito
  itemQuantity: number; // Cantidad de artículos en el carrito
}

export const Header = ({ setShowCartResume, itemQuantity }: HeaderProps) => {
  return (
    <div className="header">
      {/* Título principal de la página */}
      <h1>Shopping Cart</h1>

      <div className="ShowCartButton">
        {/* Botón que muestra el resumen del carrito al hacer clic */}
        <button
          onClick={() => setShowCartResume(true)}
          aria-label="Show cart resume"
        >
          <Image src="/icons/cart.png" alt="Cart icon" width={24} height={24} />

          {/* Muestra la cantidad de artículos en el carrito */}
          <span>{itemQuantity}</span>
        </button>
      </div>
    </div>
  );
};
