import React from 'react'
import {View, StatusBar} from 'react-native'
import Navigation from '../navigation/index'

const App: React.FC = () => {
  return (
    // <Provider store={store}>

    <View style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
      <Navigation />
    </View>
    //</Provider>
  )
}

// const styles = StyleSheet.create({

// })

export default App
