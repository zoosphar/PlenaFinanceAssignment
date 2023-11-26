import {useNavigation} from '@react-navigation/native';
import {useMemo} from 'react';

import {Theme} from '../../utils/theme.util';
import tw from 'twrnc';
import {useRecoilValue} from 'recoil';
import {totalCartItemsSelector} from '../../recoil/selectors';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import {TopWidgetStyle} from '../../utils/interfaces.util';

export default function HomeTopWidget(): JSX.Element {
  const navigation = useNavigation();

  const styles: TopWidgetStyle = useMemo(() => {
    return {
      container: tw`bg-[${Theme.Colors.lightBlue}] h-[18rem] flex p-5`,
      topBar: tw`flex flex-row justify-between items-center mt-8`,
      searchBar: tw`flex flex-row justify-start items-center mt-11 bg-[${Theme.Colors.darkBlue}] rounded-full pl-7 py-1`,
      detailsBar: tw`flex flex-row`,
    };
  }, []);

  const totalCartItems = useRecoilValue(totalCartItemsSelector);

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={tw`text-[#F8F9FB] text-[22px] font-semibold`}>
          Hey, Rahul
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart' as never)}>
          <Image source={icons.BagIcon} />
          {totalCartItems !== 0 && (
            <View
              style={tw`bg-[${Theme.Colors.darkYellow}] rounded-full absolute -top-2 left-2 w-6 h-6 flex justify-center items-center border-2 border-[${Theme.Colors.lightBlue}]`}>
              <Text style={tw`text-[${Theme.Colors.greyShade1}] text-sm`}>
                {totalCartItems}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Image source={icons.SearchIcon} />
        <TextInput
          style={tw`ml-2 w-full text-[14px] font-medium text-[${Theme.Colors.greyShade3}]`}
          placeholder="Search products or store"
          placeholderTextColor={Theme.Colors.greyShade3}
        />
      </View>

      {/* Details Bar */}
      <View style={tw`flex flex-row justify-center mt-11`}>
        <Image source={icons.HomeTopDetailsBarText} />
      </View>
    </View>
  );
}
