import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {navigationRef} from './src/navigation/NavigationService';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/Store';

const App = () => {
  const config = {
    screens: {
      Home: '/',
      Favourites: 'favourites',
    },
  };

  const linking = {
    prefixes: ['https://dogz.com', 'dogz://'],
    config,
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
