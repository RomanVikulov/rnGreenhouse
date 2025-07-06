import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Montserrat-Regular': require('./assets/fonts/Lora-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: '#fff' }} />;
  }

  return (
    <>
      {/* <LoginScreen onLayoutRootView={onLayoutRootView} /> */}
      <RegisterScreen onLayoutRootView={onLayoutRootView} />
    </>
  );
}
