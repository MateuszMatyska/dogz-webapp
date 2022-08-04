import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './FavouritesScreen.style';

const FavouritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Favourites Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default FavouritesScreen;
