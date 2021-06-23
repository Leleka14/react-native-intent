import React from 'react'
import {View, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import {store} from '../store'
import Navigation from '../navigation/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor={'transparent'}
        />
        <Navigation />
      </View>
    </Provider>
  )
}

export default App
