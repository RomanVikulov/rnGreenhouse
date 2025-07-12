import { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from './router';
import { store } from './redux/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const routing = useRoute(false, onLayoutRootView);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Lora-Regular': require('./assets/fonts/Lora-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
