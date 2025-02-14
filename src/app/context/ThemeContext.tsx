// context/ThemeContext.tsx


"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Definir el tipo del contexto
interface ThemeContextType {
  isAlternateUI: boolean;
  toggleUI: () => void;
}

// Crear el contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Crear el proveedor del contexto
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isAlternateUI, setIsAlternateUI] = useState(false);

  // Función para alternar entre las UI
  const toggleUI = () => {
    setIsAlternateUI((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isAlternateUI, toggleUI }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto en cualquier parte de la aplicación
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};
