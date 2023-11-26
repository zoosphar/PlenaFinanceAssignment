import {Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import {Theme} from '../../utils/theme.util';
import {useRecoilState} from 'recoil';
import {
  favoriteProductsState,
  recommendedProductsListState,
  selectedProductState,
} from '../../recoil/atoms';
import {useQuery} from 'react-query';
import {useEffect} from 'react';
import {MasonryFlashList} from '@shopify/flash-list';
import ProductCard from './ProductCard.component';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../utils/interfaces.util';
import {fetchRecommendedProducts} from '../../helpers/api';

export default function RecommendedProductsList(): JSX.Element {
  const {data, isLoading, error} = useQuery<Product[]>(
    'products',
    fetchRecommendedProducts,
  );
  const [productList, setProductList] = useRecoilState<Product[]>(
    recommendedProductsListState,
  );
  const [favoriteProducts, setFavoriteProducts] = useRecoilState<number[]>(
    favoriteProductsState,
  );
  const [_, setSelectedProduct] = useRecoilState<Product>(selectedProductState);

  const navigation = useNavigation();

  useEffect(() => {
    if (data) {
      const productListWithIsFavorite = data.map(product => ({
        ...product,
        isFavorite: false,
      }));
      setProductList(productListWithIsFavorite);
    }
  }, [data, setProductList]);

  const onPressProductCard = (product: Product) => {
    navigation.navigate('ProductDetails' as never);
    setSelectedProduct(product);
  };

  const renderListItem = ({item}: {item: Product}) => {
    let isFavorite = false;
    if (favoriteProducts.length !== 0 && favoriteProducts.includes(item.id))
      isFavorite = true;
    return (
      <View style={tw`mt-5`}>
        <TouchableOpacity onPress={() => onPressProductCard(item)}>
          <ProductCard product={item} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={tw`mx-5`}>
      <Text style={tw`font-normal text-3xl text-[${Theme.Colors.greyShade7}]`}>
        Recommended
      </Text>
      <View style={tw`h-66`}>
        <MasonryFlashList
          data={productList}
          numColumns={2}
          renderItem={renderListItem}
          estimatedItemSize={200}
          keyExtractor={(item): string => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
