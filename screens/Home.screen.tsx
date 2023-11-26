import {View} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import RecommendedProductsList from '../components/Home/RecommendedProductsList.component';
import BottomNavigationBar from '../components/BottomNavigationBar.component';
import {useRoute} from '@react-navigation/native';
import OfferCarouselWidget from '../components/Home/OfferCarouselWidget.component';
import HomeTopWidget from '../components/Home/HomeTopWidget.component';

export default function Home(): JSX.Element {
  const router = useRoute();

  return (
    <View>
      <HomeTopWidget />
      <OfferCarouselWidget />
      <RecommendedProductsList />
      <View style={tw`relative p-5 flex justify-center items-center w-full`}>
        <BottomNavigationBar currentScreen={router.name} />
      </View>
    </View>
  );
}
