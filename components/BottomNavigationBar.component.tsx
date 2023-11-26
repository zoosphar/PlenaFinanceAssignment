import tw from 'twrnc';
import {Theme} from '../utils/theme.util';
import {Image, Text, TouchableNativeFeedback, View} from 'react-native';
import icons from '../assets/icons';

function BottomNavigationBar({
  currentScreen,
}: {
  currentScreen: string;
}): JSX.Element {
  return (
    <View
      style={tw`w-full h-[89px] bg-[${Theme.Colors.greyShade1}] rounded-[30px] flex flex-row justify-between items-center px-8 absolute bottom-8`}>
      <TouchableNativeFeedback>
        {currentScreen === 'Home' ? (
          <View
            style={tw`h-14 w-14 bg-[${Theme.Colors.greyShade7}] rounded-full flex justify-center items-center border-8 border-transparent border-solid -top-8`}>
            <Image source={icons.FilledHomeIcon} />
          </View>
        ) : (
          <View style={tw`flex justify-center items-center`}>
            <Image source={icons.EmptyHomeIcon} />

            <Text
              style={tw`text-center text-[${Theme.Colors.greyShade3}] text-xs font-medium`}>
              Home
            </Text>
          </View>
        )}
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={tw`flex justify-center items-center`}>
          <Image source={icons.EmptyCategoryIcon} />
          <Text
            style={tw`text-center text-[${Theme.Colors.greyShade3}] text-xs font-medium`}>
            Categories
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={tw`flex justify-center items-center`}>
          <Image source={icons.EmptyHeartIconNav} />
          <Text
            style={tw`text-center text-[${Theme.Colors.greyShade3}] text-xs font-medium`}>
            Favorite
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={tw`flex justify-center items-center`}>
          <Image source={icons.VerticalMoreIcon} />
          <Text
            style={tw`text-center text-[${Theme.Colors.greyShade3}] text-xs font-medium`}>
            More
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

export default BottomNavigationBar;
