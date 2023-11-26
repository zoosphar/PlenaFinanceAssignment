import { atom } from 'recoil';
import { CartProduct, Product } from '../utils/interfaces.util';

export const recommendedProductsListState = atom<Product[]>({
  key: 'recommendedProductsListState',
  default: [],
});

export const favoriteProductsState = atom<number[]>({
  key: 'favoriteProductsState',
  default: [],
});

export const selectedProductState = atom<Product>({
  key: 'selectedProductState',
  default: {
    id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: []
}
});

export const cartItemsState = atom<CartProduct[]>({
  key: 'cartItemState',
  default: []
})