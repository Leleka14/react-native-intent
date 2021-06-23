import React from 'react'
import {Text, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import styles from './styles'

interface IProps {}

const Recipe: React.FC<IProps> = ({}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)

  return (
    <View style={s.container}>
      <Text style={s.header}>Recipe</Text>
    </View>
  )
}

export default Recipe
