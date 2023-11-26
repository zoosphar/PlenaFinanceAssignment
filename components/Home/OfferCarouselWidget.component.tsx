import {Image, ScrollView, View} from 'react-native';
import icons from '../../assets/icons';
import tw from 'twrnc';

export default function OfferCarouselWidget(): JSX.Element {
  return (
    <View>
      <ScrollView
        style={tw`my-5`}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <Image style={tw`ml-5`} source={icons.OfferCard} />
        <Image style={tw`ml-5`} source={icons.OfferCard} />
        <Image style={tw`ml-5`} source={icons.OfferCard} />
        <Image style={tw`ml-5`} source={icons.OfferCard} />
      </ScrollView>
    </View>
  );
}
