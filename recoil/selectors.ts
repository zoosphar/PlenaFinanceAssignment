import { selector } from "recoil";
import { CartProduct } from "../utils/interfaces.util";
import { cartItemsState } from "./atoms";

export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsState);
    return cartItems.reduce((total: number, item: CartProduct) => total + item.price * item.quantity, 0);
  },
});

export const totalCartItemsSelector = selector({
    key: 'totalCartItemsSelector',
    get: ({get}) => {
        const cartItems = get(cartItemsState);
        return cartItems.reduce((total: number, item: CartProduct) => total + item.quantity, 0);
    }
})