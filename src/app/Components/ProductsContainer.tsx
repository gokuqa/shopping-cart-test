import { Products } from "../Data/Products";
import { Product } from "./Product";
import "../styles/productContainer.css";

// Definimos las interfaces para las props del componente ProductsContainer
interface ProductsContainerProps {
  itemQuantity: number; // Cantidad total de productos en el carrito
  setItemQuantity: React.Dispatch<React.SetStateAction<number>>; // Función para actualizar la cantidad total de productos
}

export const ProductsContainer = ({
  itemQuantity,
  setItemQuantity,
}: ProductsContainerProps) => {
  return (
    <div className="ProductsContainer">
      {Products.map((product) => (
        // Usamos el código del producto como key en lugar de combinar título e índice
        <Product
          key={product.code} // Clave única basada en el código del producto
          srcImage={product.srcImage}
          title={product.title}
          code={product.code}
          price={product.price}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
        />
      ))}
    </div>
  );
};
