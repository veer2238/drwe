import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Slpace from './Pages/Splace';
import Parent from './Pages/Parent';

const Stack = createStackNavigator();

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Splace' component={Slpace}/>

        <Stack.Screen name='Parent' component={Parent}/>

        
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main