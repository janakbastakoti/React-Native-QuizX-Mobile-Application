import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import CategoryScreen from './src/screen/CategoryScreen';
import SettingScreen from './src/screen/SettingScreen';
import QuestionScreen from './src/screen/QuestionScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {reducer} from './src/components/reducer/reducer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);
const Stack = createStackNavigator();

const App = ()  => {
  return (
    <Provider store={store}>
   <NavigationContainer>
      <Stack.Navigator headerMode="none">
      	<Stack.Screen name="Home" component={HomeScreen} />
       	<Stack.Screen name="Category" component={CategoryScreen} />
       	<Stack.Screen name="Question" component={QuestionScreen} />
      	<Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
    
    
  );
};

const styles = StyleSheet.create({
  container:{
  	flex: 1,
    backgroundColor: '#4d4f4d',
  },
 
});

export default App;
