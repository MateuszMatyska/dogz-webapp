import React from 'react';
import {Platform} from 'react-native';
import HomeScreenMobile from './HomeMobile/HomeScreen.mobile';
import HomeScreenWeb from './HomeWeb/HomeScreen.web';

const HomeScreen = () => {
  return Platform.OS === 'web' ? <HomeScreenWeb /> : <HomeScreenMobile />;
};

export default HomeScreen;
