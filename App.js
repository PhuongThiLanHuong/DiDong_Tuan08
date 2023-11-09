import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screen/HomeScreen'
import Screen02 from './screen/Screen02'
import Screen03 from './screen/Screen03'
import Donut from './screen/Donut'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Donut'>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Screen02" component={Screen02} options={{headerShown: false}}/>
        <Stack.Screen name="Screen03" component={Screen03} options={{headerShown: false}}/>
        <Stack.Screen name="Donut" component={Donut} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}