import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {navigate} from '../../navigation/NavigationService';
import {styles} from './HomeScreen.style';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>React Native App</Text>
        <TouchableOpacity
          onPress={() => {
            navigate('Favourites');
          }}>
          <Text style={styles.title}>Go To Favourites</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{Platform.OS}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
