import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import {
  Poppins_300Light,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';

import Main from './src/pages/Main';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {

    return <AppLoading />

  } else {

    return (
    <>
      <StatusBar style="dark" />
      <Main />
    </>
    )
  }
}


export default App;