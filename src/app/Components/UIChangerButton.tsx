// app/components/UIChangerButton.tsx
"use client";

import { useTheme } from "../context/ThemeContext"; // Importar el hook del contexto de tema
import styles from "../styles/UIChangerButton.module.css"; // Importar el módulo CSS

// Componente funcional para el botón que cambia la UI
const UIChangerButton: React.FC = () => {
  const { toggleUI } = useTheme(); // Obtener la función para cambiar la UI desde el contexto

  return (
    // Botón para cambiar la UI
    <button className={styles.uiChangerButton} onClick={toggleUI}>
      Cambiar UI
    </button>
  );
};

export default UIChangerButton;