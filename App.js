import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Projects" component={ProjectsScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Contact" component={ContactScreen} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
