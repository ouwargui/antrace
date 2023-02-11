import React from 'react';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import {StatusBar} from 'expo-status-bar';
import HomePage from './src/pages/HomePage';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <HomePage />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
