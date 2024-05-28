import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen'
import SignupScreen from './src/screens/LoginSignupScreens/SignupScreen'

const Stack = createNativeStackNavigator();

const FoodApp1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default FoodApp1

const styles = StyleSheet.create({})