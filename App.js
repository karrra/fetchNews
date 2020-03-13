import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NewsList from './NewsList'
import NewsDetail from './NewsDetail'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NewsList}
          options={{
            title: "The Guardian News",
            headerTitleStyle: {fontSize: 25}
          }}
        />
        <Stack.Screen
          name="Detail"
          component={NewsDetail}
          options={{title: ""}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}