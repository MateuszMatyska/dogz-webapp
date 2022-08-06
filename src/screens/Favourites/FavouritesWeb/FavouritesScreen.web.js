import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getDogs} from '../../../store/Dogs/Dogs.slice';
import {styles} from './FavouritesScreen.web.styles';

const FavouritesScreenWeb = () => {
  const favouritesDogs = useSelector(getDogs);

  const renderItem = ({item}) => (
    <View style={styles.dogsContainer}>
      <Text style={styles.dogsText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Favourites Dogs</Text>
      </View>
      <FlatList
        style={styles.list}
        data={favouritesDogs}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default FavouritesScreenWeb;
