import {FlashList} from '@shopify/flash-list';
import {
  Dimensions,
  Image,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import icons from '../../assets/icons';
import {useRecoilState} from 'recoil';
import {Product} from '../../utils/interfaces.util';
import {recommendedProductsListState} from '../../recoil/atoms';
import {handleFavoriteProduct} from '../../helpers/helper';
import {useMemo} from 'react';

export default function ImageCarouselWidget({
  productImages,
  id,
}: {
  productImages: string[];
  id: number;
}): JSX.Element {
  const [productList, setProductList] = useRecoilState<Product[]>(
    recommendedProductsListState,
  );
  //   const [selectedProduct, _] = useRecoilState<Product>(selectedProductState);

  const selectedProduct = useMemo(
    () => productList.find(product => product.id === id),
    [productList],
  );

  const width = Dimensions.get('screen').width;
  const renderItem = ({item}: {item: string}) => {
    return (
      <Image
        source={{uri: item}}
        resizeMode="cover"
        style={{width: width, height: 207}}
      />
    );
  };

  return (
    <View style={tw`mt-2`}>
      <FlashList
        data={productImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${id}_${index}`}
        horizontal
        estimatedItemSize={208}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        indicatorStyle="white"
      />
      <TouchableOpacity
        style={tw`p-3 bg-white w-14 h-14 flex items-center justify-center absolute rounded-xl right-6 top-4`}
        onPress={() =>
          handleFavoriteProduct(selectedProduct, productList, setProductList)
        }>
        {selectedProduct?.isFavorite ? (
          <Image style={tw`h-5 w-5`} source={icons.RedFilledHeartIconBig} />
        ) : (
          <Image source={icons.EmptyHeartIconNavBig} />
        )}
      </TouchableOpacity>
    </View>
  );
}
