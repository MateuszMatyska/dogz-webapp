import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {navigationRef} from './src/navigation/NavigationService';

const App = () => {
  const config = {
    screens: {
      Home: '/',
      Favourites: 'favourites',
    },
  };

  const linking = {
    prefixes: [
      'https://dogz.com',
      'dogz://',
      'http://localhost:8080/',
      'http://localhost:8080',
      'localhost:8080',
    ],
    config,
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
