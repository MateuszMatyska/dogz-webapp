import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DogsReducer from './Dogs/Dogs.slice';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  dogs: DogsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
