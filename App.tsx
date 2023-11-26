/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './screens/Home.screen';
import Favorites from './screens/Favorites.screen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import Cart from './screens/Cart.screen';
import ProductDetails from './screens/ProductDetails.screen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
