import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainNavScreens} from './src/navigation/AppNavigation'
import {Provider} from 'react-redux';
import {store} from './src/store/index'

export default function App() {
  return <Provider store={store}><MainNavScreens /></Provider> 
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
