import {View} from 'react-native';
import {useRecoilState} from 'recoil';
import {selectedProductState} from '../recoil/atoms';
import TitleAndRating from '../components/ProductDetails/TitleAndRating.component';
import TopBarProductDetails from '../components/ProductDetails/TopBarProductDetails.component';
import ImageCarouselWidget from '../components/ProductDetails/ImageCarouselWidget.component';
import {ProductBottomDetails} from '../components/ProductDetails/ProductBottomDetails.component';
import React from 'react';
import {Product} from '../utils/interfaces.util';

function ProductDetails(): JSX.Element {
  const MemoizedTopBarProductDetails = React.memo(TopBarProductDetails);

  const [selectedProduct, setSelectedProduct] =
    useRecoilState<Product>(selectedProductState);

  return (
    <View>
      <MemoizedTopBarProductDetails />
      <TitleAndRating
        title={selectedProduct.title}
        rating={selectedProduct.rating}
        brand={selectedProduct.brand}
      />
      <ImageCarouselWidget
        productImages={selectedProduct.images}
        id={selectedProduct.id}
      />

      <ProductBottomDetails product={selectedProduct} />
    </View>
  );
}

export default ProductDetails;
