import React from 'react';
import { BaseProvider } from './src/contexts';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Loading } from './src/components/loading';
import { StatusBar } from 'native-base';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  });

  
  return (
    <BaseProvider>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {!fontsLoaded ? <Loading /> : <Routes />}
      
    </BaseProvider>
  );
}
