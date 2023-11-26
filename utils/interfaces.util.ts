import {Style} from 'twrnc/dist/esm/types';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isFavorite?: boolean;
}
export interface CartProduct extends Product{
  quantity: number;
}

export interface TopWidgetStyle {
    container: Style;
    topBar: Style;
    searchBar: Style;
  }

export interface ProductCardProps {
  isFavorite: boolean;
  imageURL: string;
  price: number;
  title: string;
}

export interface TitleAndRatingProps {
  title: string;
  rating: number;
  brand: string;
}
