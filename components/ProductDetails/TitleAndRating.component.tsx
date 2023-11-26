import {Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import tw from 'twrnc';
import {Theme} from '../../utils/theme.util';
import {TitleAndRatingProps} from '../../utils/interfaces.util';

export default function TitleAndRating({
  title,
  rating,
  brand,
}: TitleAndRatingProps): JSX.Element {
  return (
    <View style={tw`flex justify-center items-start px-5 py-2`}>
      <Text
        style={tw`text-neutral-800 text-[50px] font-light leading-[62.55px]`}>
        {title}
      </Text>
      <Text
        style={tw`text-neutral-800 text-[50px] font-extrabold leading-[62.55px]`}>
        {brand}
      </Text>
      <View style={tw`mt-3 flex flex-row justify-start items-center`}>
        <Rating
          type="custom"
          ratingBackgroundColor={'black'}
          ratingCount={5}
          tintColor={'#f2f2f2'}
          startingValue={rating}
          readonly
          imageSize={16}
        />
        <Text
          style={tw`text-center text-[${Theme.Colors.greyShade4}] text-sm font-normal leading-tight ml-1`}>
          {rating} stars
        </Text>
      </View>
    </View>
  );
}
