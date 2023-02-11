import React from 'react';
import PagerView from 'react-native-pager-view';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik';
import {StatusBar} from 'expo-status-bar';
import HostingPage from './src/pages/HostingPage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <PagerView style={{flex: 1}}>
        <HostingPage />
      </PagerView>
      <StatusBar style="light" />
    </>
  );
}
