import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import expe from '../screens/expe';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="expe" options={{headerShown: false}} component={expe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}






// <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
// 