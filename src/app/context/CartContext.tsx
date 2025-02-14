import React, { createContext, useContext, useState } from 'react';

interface CartItem {
  code: string;
  quantity: number;
}

const CartContext = createContext<{
  cart: CartItem[];
  addProduct: (codeProduct: string) => void;
  deleteProduct: (codeProduct: string) => void;
}>({
  cart: [],
  addProduct: () => {},
  deleteProduct: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Usamos useState para gestionar el carrito

  const addProduct = (codeProduct: string) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.code === codeProduct);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.code === codeProduct
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { code: codeProduct, quantity: 1 }];
      }
    });
  };

  const deleteProduct = (codeProduct: string) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.code === codeProduct && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Eliminar productos con cantidad 0
    });
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
