import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HomeContainer from '../containers/Home/HomeContainer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

export default () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomeContainer} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
