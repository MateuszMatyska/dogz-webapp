import React from 'react';
import {Platform} from 'react-native';
import FavouritesScreenWeb from './FavouritesWeb/FavouritesScreen.web';
import FavouritesScreenMobile from './FavouritesMobile/FavouritesScreen.mobile';

const FavouritesScreen = () => {
  return Platform.OS === 'web' ? (
    <FavouritesScreenWeb />
  ) : (
    <FavouritesScreenMobile />
  );
};

export default FavouritesScreen;
