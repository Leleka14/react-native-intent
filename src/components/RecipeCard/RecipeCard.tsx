import React from 'react'
import {Text, View} from 'react-native'
import {styles} from './styles'

interface IProps {
  //   searchValue: string
  //   onSearch(text: string): void
  //   displaySearchIcon: boolean
  //   isTyping: boolean
  //   searchIconRef: any
  //   transitionIcon: any
  //   recipes: any
  item: any
}

const RecipeCard: React.FC<IProps> = ({
  //   searchValue,
  //   onSearch,
  //   displaySearchIcon,
  //   isTyping,
  //   searchIconRef,
  //   transitionIcon,
  //   recipes,
  item,
}) => {
  const s = styles

  return (
    <View style={s.container}>
      <Text style={s.title}>{item.title}</Text>
    </View>
  )
}

export default RecipeCard
