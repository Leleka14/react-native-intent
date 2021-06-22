import React from 'react'
import {View, StatusBar} from 'react-native'

const App = () => {
  return (
    // <Provider store={store}>
    <View>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
    </View>
    //</Provider>
  )
}

// const styles = StyleSheet.create({

// })

export default App
