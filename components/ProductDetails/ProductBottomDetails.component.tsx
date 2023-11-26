import {Text, TouchableOpacity, View} from 'react-native';
import {Theme} from '../../utils/theme.util';
import tw from 'twrnc';
import {CartProduct, Product} from '../../utils/interfaces.util';
import {useRecoilState} from 'recoil';
import {cartItemsState} from '../../recoil/atoms';
import {addItemToCart} from '../../helpers/helper';

export function ProductBottomDetails({
  product,
}: {
  product: Product;
}): JSX.Element {
  const [cartItems, setCartItems] =
    useRecoilState<CartProduct[]>(cartItemsState);

  //   const addItemToCart = (product: Product) => {
  //     // Check if the product is already in the cart
  //     const existingProduct = cartItems.find(item => item.id === product.id);

  //     if (existingProduct) {
  //       // If the product is already in the cart, update its quantity
  //       const updatedCartItems = cartItems.map(item =>
  //         item.id === product.id ? {...item, quantity: item.quantity + 1} : item,
  //       );

  //       setCartItems(updatedCartItems);
  //     } else {
  //       // If the product is not in the cart, add it to the cart with quantity 1
  //       const newCartItem: CartProduct = {
  //         ...product,
  //         quantity: 1,
  //       };

  //       setCartItems([...cartItems, newCartItem]);
  //     }
  //   };

  const handleAddToCart = (product: Product): void => {
    addItemToCart(cartItems, setCartItems, product);
  };

  return (
    <View style={tw`p-5`}>
      <View style={tw`flex flex-row justify-start items-center`}>
        <Text
          style={tw`text-[${Theme.Colors.lightBlue}] text-base font-bold leading-normal`}>
          ${product.price}
        </Text>
        <View
          style={tw`w-[84px] h-6 px-2.5 py-1 bg-[${Theme.Colors.lightBlue}] rounded-[70px] justify-center items-center ml-2`}>
          <Text
            style={tw`text-center text-gray-50 text-xs font-normal leading-none tracking-tight`}>
            %{product.discountPercentage} OFF
          </Text>
        </View>
      </View>

      <View style={tw`flex flex-row justify-between items-center mt-5`}>
        <TouchableOpacity
          style={tw`w-[143px] h-14 rounded-[20px] border border-[${Theme.Colors.lightBlue}] flex justify-center items-center`}
          onPress={() => handleAddToCart(product)}>
          <Text
            style={tw`w-20 text-center text-[${Theme.Colors.lightBlue}] text-sm font-semibold `}>
            Add To Cart
          </Text>
        </TouchableOpacity>

        <View
          style={tw`w-[169px] h-14 rounded-[20px] border border-[${Theme.Colors.lightBlue}] bg-[${Theme.Colors.lightBlue}] flex justify-center items-center`}>
          <Text
            style={tw`w-20 text-center text-[${Theme.Colors.greyShade1}] text-sm font-semibold `}>
            Buy Now
          </Text>
        </View>
      </View>

      <View style={tw`mt-5`}>
        <Text
          style={tw`text-[${Theme.Colors.greyShade7}] text-base font-normal leading-normal`}>
          Details
        </Text>
        <Text
          style={tw`text-[${Theme.Colors.greyShade4}] text-base font-normal leading-normal`}>
          {product.description}
        </Text>
      </View>
    </View>
  );
}
