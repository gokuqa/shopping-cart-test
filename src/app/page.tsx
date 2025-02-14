"use client";
import { useState } from "react";
import { useTheme } from "./context/ThemeContext"; // Importar el hook del contexto
import { Header } from "./Components/Header"; // Importar de la carpeta Components
import { ProductsContainer } from "./Components/ProductsContainer"; // Importar de la carpeta Components
import { CartModal } from "./Components/CartModal"; // Importar de la carpeta Components
import NewHeader from "./alternateUI/NewHeader"; // Importar de la nueva carpeta
import NewProductsContainer from "./alternateUI/NewProductsContainer"; // Importar de la nueva carpeta
import NewCartModal from "./alternateUI/NewCartModal"; // Importar de la nueva carpeta

import UIChangerButton from "./Components/UIChangerButton"; // Botón para cambiar UI
import {
  addProductToCart,
  deleteProductFromCart,
  getCarrito,
} from "./Data/Cart";
import { Products } from "./Data/Products"; // Importar los productos desde Products.tsx

export default function Home() {
  const [showCartResume, setShowCartResume] = useState(false); // Controlar la visibilidad del modal del carrito
  const [itemQuantity, setItemQuantity] = useState(0); // Mantener la cantidad de artículos
  const { isAlternateUI } = useTheme(); // Obtener el estado de la UI alterna

  // Usar los productos importados desde Products.tsx
  const products = Products.map((product, index) => ({
    id: index + 1,
    name: product.title,
    price: product.price,
    imageUrl: product.srcImage,
    code: product.code,
  }));

  // Función para manejar la adición de productos al carrito
  const handleAddProduct = (productCode: string) => {
    addProductToCart(productCode);
    const totalQuantity = getCarrito().reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  // Función para manejar la eliminación de productos del carrito
  const handleDeleteProduct = (productCode: string) => {
    deleteProductFromCart(productCode);
    const totalQuantity = getCarrito().reduce(
      (sum, product) => sum + product.quantity,
      0
    );
    setItemQuantity(totalQuantity);
  };

  return (
    <div className="App">
      {/* Botón para cambiar la UI */}
      <UIChangerButton />

      {/* Renderizamos la UI alterna o la predeterminada dependiendo del estado */}
      {isAlternateUI ? (
        <div className="contentPage">
          {/* Componente de cabecera alternativo */}
          <NewHeader
            setShowCartResume={setShowCartResume}
            itemQuantity={itemQuantity}
          />
          {/* Componente de productos alternativo */}
          <NewProductsContainer
            products={products} // Pasamos la prop 'products'
            setItemQuantity={setItemQuantity}
            handleAddProduct={handleAddProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
          {/* Modal de carrito alternativo */}
          {showCartResume && (
            <NewCartModal
              handleClose={() => setShowCartResume(false)}
              products={products} // Pasamos los productos al modal
              setItemQuantity={setItemQuantity}
            />
          )}
        </div>
      ) : (
        <div className="contentPage2">
          {/* Componente de cabecera predeterminado */}
          <Header
            setShowCartResume={setShowCartResume}
            itemQuantity={itemQuantity}
          />
          {/* Componente de productos predeterminado */}
          <ProductsContainer
            itemQuantity={itemQuantity}
            setItemQuantity={setItemQuantity}
          />
          {/* Modal de carrito predeterminado */}
          {showCartResume && (
            <CartModal handleClose={() => setShowCartResume(false)} />
          )}
        </div>
      )}
    </div>
  );
}