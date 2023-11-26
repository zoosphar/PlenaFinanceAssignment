import {useNavigation} from '@react-navigation/core';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import icons from '../assets/icons';
import tw from 'twrnc';
import {Theme} from '../utils/theme.util';
import {useRecoilState, useRecoilValue} from 'recoil';
import {CartProduct} from '../utils/interfaces.util';
import {cartItemsState} from '../recoil/atoms';
import {totalCartItemsSelector, totalPriceSelector} from '../recoil/selectors';
import {useRef, useState} from 'react';

function TopBarCart(): JSX.Element {
  const navigation = useNavigation();
  const totalCartItems = useRecoilValue(totalCartItemsSelector);
  return (
    <View style={tw`flex flex-row justify-start items-center mt-8 w-full p-5`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={icons.BackIcon} />
      </TouchableOpacity>
      <View style={tw`ml-5`}>
        <Text
          style={tw`text-center text-neutral-800 text-base font-normal leading-normal`}>
          Shopping Cart ({totalCartItems})
        </Text>
      </View>
    </View>
  );
}

function CartItemsList(): JSX.Element {
  const [cartItems, setCartItems] =
    useRecoilState<CartProduct[]>(cartItemsState);
  const slideAnim = useRef(new Animated.Value(1)).current;

  const updateCartItemQuantity = (updateType: string, item: CartProduct) => {
    // Find the index of the item in the cart
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    // If the item is not found, return
    if (itemIndex === -1) {
      return;
    }

    // Clone the cart items array to avoid mutating the state directly
    const updatedCartItems = [...cartItems];

    // If the quantity becomes less than 1, remove the item
    if (
      updatedCartItems[itemIndex].quantity === 1 &&
      updateType === 'subtract'
    ) {
      updatedCartItems.splice(itemIndex, 1);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Remove the item from the data array after the animation completes
        setCartItems(updatedCartItems);
        // Reset the animated value for the next item
        slideAnim.setValue(1);
      });
      return;
    }

    // Update the quantity based on the update type
    if (updateType === 'subtract') {
      // Decrease the quantity, but not below 1
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: Math.max(1, item.quantity - 1),
      };
    } else if (updateType === 'add') {
      // Increase the quantity
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: item.quantity + 1,
      };
      console.log(
        'increased the quantity',
        itemIndex,
        updatedCartItems[itemIndex].quantity + 1,
        updatedCartItems,
      );
    }

    // Update the cart items state
    setCartItems(updatedCartItems);
  };

  const animatedStyles = {
    transform: [
      {
        translateX: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-100, 0],
        }),
      },
    ],
  };

  return (
    <View>
      {cartItems.map((item, index) => (
        <Animated.View
          style={[
            tw`flex flex-row justify-between items-center mx-5 py-2 border-b-2 border-violet-100`,
            animatedStyles,
          ]}
          key={item.id}>
          <View style={tw`flex flex-row justify-start items-center`}>
            <Image
              source={{uri: item.thumbnail}}
              style={tw`h-[30px] w-[30px]`}
            />
            <View style={tw`ml-5`}>
              <Text style={tw`text-neutral-800 text-sm font-medium`}>
                {item.title}
              </Text>
              <Text
                style={tw`text-neutral-800 text-sm font-normal leading-tight mt-0.5`}>
                ${item.price}
              </Text>
            </View>
          </View>

          <View style={tw`flex flex-row justify-center items-center`}>
            <TouchableOpacity
              onPress={() => updateCartItemQuantity('subtract', item)}>
              <Image source={icons.MinusIcon} />
            </TouchableOpacity>
            <Text style={tw`px-2 text-neutral-800 text-sm font-medium`}>
              {item.quantity}
            </Text>
            <TouchableOpacity
              onPress={() => updateCartItemQuantity('add', item)}>
              <Image source={icons.AddIcon} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      ))}
    </View>
  );
}

function CartCheckoutSection(): JSX.Element {
  const totalCartPrice = useRecoilValue(totalPriceSelector);

  return (
    <View
      style={tw`mx-3 bg-[${Theme.Colors.greyShade2}] rounded-xl flex items-center py-5`}>
      <View
        style={tw`flex flex-row justify-between items-center px-10 pb-2 pt-0 w-full`}>
        <Text
          style={tw`text-center text-gray-500 text-sm font-normal leading-tight`}>
          Subtotal
        </Text>
        <Text
          style={tw`text-right text-neutral-800 text-sm font-medium leading-tight`}>
          ${totalCartPrice}
        </Text>
      </View>
      <View
        style={tw`flex flex-row justify-between items-center px-10 py-2  w-full`}>
        <Text
          style={tw`text-center text-gray-500 text-sm font-normal leading-tight`}>
          Delivery
        </Text>
        <Text
          style={tw`text-right text-neutral-800 text-sm font-medium leading-tight`}>
          $2
        </Text>
      </View>
      <View
        style={tw`flex flex-row justify-between items-center px-10 py-2  w-full`}>
        <Text
          style={tw`text-center text-gray-500 text-sm font-normal leading-tight`}>
          Total
        </Text>
        <Text
          style={tw`text-right text-neutral-800 text-sm font-medium leading-tight`}>
          ${totalCartPrice + 2}
        </Text>
      </View>
      <View
        style={tw`w-[327px] h-14 bg-blue-800 rounded-[20px] flex justify-center items-center mt-6`}>
        <Text style={tw`text-center text-white text-sm font-semibold`}>
          Proceed To Checkout
        </Text>
      </View>
    </View>
  );
}

export default function Cart(): JSX.Element {
  const totalCartItems = useRecoilValue(totalCartItemsSelector);
  return (
    <View style={tw`h-full`}>
      <TopBarCart />
      <CartItemsList />
      <View style={tw`absolute bottom-0 left-0 w-full`}>
        {totalCartItems !== 0 && <CartCheckoutSection />}
      </View>
    </View>
  );
}
