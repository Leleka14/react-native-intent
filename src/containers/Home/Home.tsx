import React from 'react'
import {Text, TextInput, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import styles from './styles'

const Home: React.FC = () => {
  const insets = useSafeAreaInsets()

  const s = styles(insets)
  console.log(insets)

  return (
    <View style={s.container}>
      <TextInput style={s.search} />
    </View>
  )
}

export default Home
