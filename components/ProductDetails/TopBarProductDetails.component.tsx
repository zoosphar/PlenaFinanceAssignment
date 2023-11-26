import {useNavigation} from '@react-navigation/core';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import icons from '../../assets/icons';
import {Theme} from '../../utils/theme.util';
import {CartProduct} from '../../utils/interfaces.util';
import {cartItemsState} from '../../recoil/atoms';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
  totalCartItemsSelector,
  totalPriceSelector,
} from '../../recoil/selectors';

export default function TopBarProductDetails(): JSX.Element {
  const navigation = useNavigation();
  const totalCartItems = useRecoilValue(totalCartItemsSelector);

  return (
    <View
      style={tw`flex flex-row justify-between items-center mt-8 w-full p-5`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={icons.BackIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart' as never)}>
        <Image source={icons.BagIconBlack} />
        {totalCartItems !== 0 && (
          <View
            style={tw`bg-[${Theme.Colors.darkYellow}] rounded-full absolute -top-2 left-2 w-6 h-6 flex justify-center items-center border-2 border-[${Theme.Colors.greyShade2}]`}>
            <Text style={tw`text-[${Theme.Colors.greyShade1}] text-sm`}>
              {totalCartItems}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
