import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeContainer from '../containers/Home/HomeContainer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import RecipeContainer from '../containers/Recipe/RecipeContainer'

export default () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Recipe" component={RecipeContainer} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
