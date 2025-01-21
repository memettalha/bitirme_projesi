// CartContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { AddProduct } from '../../Routes/ProductDetails';
import { nanoid } from 'nanoid';

interface CartContextType {
  cartItems: AddProduct[];
  addToCart: (product: any, variants: any, sayi: number) => void; // Gerekli parametreleri tanımlayın
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<AddProduct[]>([]);

  const addToCart = (product: any, variants: any, sayi: number) => {
    if (product && variants && sayi >= 0) {
      const newProduct: AddProduct = {
        id: nanoid(),
        title: product.data.name,
        name: variants.aroma,
        weight: variants.size.gram,
        price: variants.price.total_price,
        image: `https://fe1111.projects.academy.onlyjs.com/${variants.photo_src}`,
        quantity: sayi,
      };
      setCartItems((prevItems) => [...prevItems, newProduct]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};