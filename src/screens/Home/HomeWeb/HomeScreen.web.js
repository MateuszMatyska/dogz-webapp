import React from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {navigate} from '../../../navigation/NavigationService';
import {addDog} from '../../../store/Dogs/Dogs.slice';
import {styles} from './HomeScreen.web.styles';

const HomeScreenWeb = () => {
  const dogsList = ['Beethoven', 'Slinky', 'Lady', 'The Tramp', 'Toto'];

  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View style={styles.dogsContainer}>
      <View style={styles.dogsElementWrapper}>
        <Text style={styles.dogsText}>{item}</Text>
      </View>
      <View style={styles.dogsElementWrapper}>
        <TouchableOpacity
          onPress={() => {
            dispatch(addDog(item));
          }}>
          <Text style={styles.dogsText}>Add to Favourites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>React Native Dogs App</Text>
        <FlatList
          style={styles.list}
          data={dogsList}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
        <TouchableOpacity
          onPress={() => {
            navigate('Favourites');
          }}>
          <Text style={styles.title}>Go To Favourites</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenWeb;
