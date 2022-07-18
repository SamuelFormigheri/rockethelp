import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { BaseProvider } from './src/contexts';

export default function App() {
  return (
    <BaseProvider>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </BaseProvider>
  );
}
