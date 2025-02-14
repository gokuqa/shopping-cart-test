interface CartItem {
    code: string;    // Código único del producto
    quantity: number; // Cantidad del producto en el carrito
  }
  
  // Usamos un Map para mejorar la eficiencia en la búsqueda y actualización de productos.
  const cart: Map<string, CartItem> = new Map();
  
  // Función para agregar un producto al carrito
  export const addProductToCart = (codeProduct: string): void => {
    // Verificamos si el producto ya existe en el carrito
    if (cart.has(codeProduct)) {
      // Si ya existe, incrementamos su cantidad
      cart.get(codeProduct)!.quantity += 1;
    } else {
      // Si no existe, lo agregamos con cantidad 1
      cart.set(codeProduct, { code: codeProduct, quantity: 1 });
    }
  };
  
  // Función para eliminar un producto del carrito
  export const deleteProductFromCart = (codeProduct: string): void => {
    // Verificamos si el producto existe en el carrito
    if (cart.has(codeProduct)) {
      const product = cart.get(codeProduct)!;
  
      // Si la cantidad es 1, eliminamos el producto
      if (product.quantity === 1) {
        cart.delete(codeProduct);
      } else {
        // Si la cantidad es mayor, decrementamos la cantidad
        product.quantity -= 1;
      }
    }
  };
  
  // Función para eliminar todos los productos de un tipo específico del carrito
  export const removeAllProductsFromCart = (codeProduct: string): void => {
    cart.delete(codeProduct);
  };

  // Función para obtener el carrito completo
  export const getCarrito = (): CartItem[] => {
    // Convertimos el Map a un array de CartItem
    return Array.from(cart.values());
  };
