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
import {styles} from './HomeScreen.mobile.styles';

const HomeScreenMobile = () => {
  const dogsList = ['Beethoven', 'Slinky', 'Lady', 'The Tramp', 'Toto'];

  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View style={styles.dogWrapper}>
      <View style={styles.dogElementsWrapper}>
        <Text style={styles.dogText}>{item}</Text>
      </View>
      <View style={styles.dogElementsWrapper}>
        <TouchableOpacity
          onPress={() => {
            dispatch(addDog(item));
          }}>
          <Text style={styles.dogText}>Add</Text>
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

export default HomeScreenMobile;
