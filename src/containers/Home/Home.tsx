import React from 'react'
import {TextInput, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import styles from './styles'

const Home: React.FC = () => {
  const insets = useSafeAreaInsets()

  const s = styles(insets)

  return (
    <View style={s.container}>
      <TextInput style={s.search} />
    </View>
  )
}

export default Home
