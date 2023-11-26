import { SetStateAction, Dispatch } from 'react';
import { CartProduct, Product } from '../utils/interfaces.util';

export const addItemToCart = (
  cartItems: CartProduct[],
  setCartItems: Dispatch<SetStateAction<CartProduct[]>>,
  product: Product,
): void => {
  // Check if the product is already in the cart
  const existingProduct = cartItems.find(item => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, update its quantity
    const updatedCartItems = cartItems.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCartItems(updatedCartItems);
  } else {
    // If the product is not in the cart, add it to the cart with quantity 1
    const newCartItem: CartProduct = {
      ...product,
      quantity: 1,
    };

    setCartItems([...cartItems, newCartItem]);
  }
};

export const handleFavoriteProduct = (product: Product | undefined, productList: Product[], setProductList: Dispatch<SetStateAction<Product[]>>) => {
    if(!product) return
    const isFavorite = product.isFavorite;
    const updatedProduct = {...product, isFavorite: !isFavorite};
    const updatedCartItems = productList.map(item =>
      item.id === product.id ? updatedProduct : item,
    );
    setProductList(updatedCartItems);
  };