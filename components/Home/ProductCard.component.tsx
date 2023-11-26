import {
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {Theme} from '../../utils/theme.util';
import icons from '../../assets/icons';
import {addItemToCart, handleFavoriteProduct} from '../../helpers/helper';
import {CartProduct, Product} from '../../utils/interfaces.util';
import {useRecoilState} from 'recoil';
import {cartItemsState, recommendedProductsListState} from '../../recoil/atoms';

export default function ProductCard({
  product,
}: {
  product: Product;
}): JSX.Element {
  const [cartItems, setCartItems] =
    useRecoilState<CartProduct[]>(cartItemsState);

  const handleAddToCart = (): void => {
    addItemToCart(cartItems, setCartItems, product);
  };

  const [productList, setProductList] = useRecoilState<Product[]>(
    recommendedProductsListState,
  );

  return (
    <View
      style={tw`h-[194px] w-40 bg-[${Theme.Colors.greyShade2}] flex p-3 rounded-xl`}>
      <TouchableOpacity
        onPress={() =>
          handleFavoriteProduct(product, productList, setProductList)
        }
        style={tw`w-4`}>
        {product.isFavorite ? (
          <Image source={icons.RedFilledHeartIcon} />
        ) : (
          <Image source={icons.EmptyHeartIcon} />
        )}
      </TouchableOpacity>
      <View style={tw`flex items-center justify-center h-20`}>
        {/* {!imageURL ? (
          <Image source={icons.ImagePlaceholderIcon} />
        ) : ( */}
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={tw`h-full w-full mt-2 rounded-lg`}
        />
        {/* )} */}
      </View>
      <View style={tw`flex flex-row justify-between flex-1 mt-10`}>
        <View>
          <Text
            style={tw`text-neutral-800 text-sm font-semibold leading-tight`}>
            ${product.price}
          </Text>
          <Text
            style={tw`w-28 text-gray-500 text-xs font-normal leading-none tracking-tight`}>
            {product.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={e => {
            e.stopPropagation();
            handleAddToCart();
          }}>
          <Image source={icons.AddToCartIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
