import React from 'react'
import {FlatList, Text, TextInput, View} from 'react-native'
import {Transitioning} from 'react-native-reanimated'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import {SearchIcon} from '../../assets/icons/Icons'
import styles from './styles'

interface IProps {
  searchValue: string
  onSearch(text: string): void
  displaySearchIcon: boolean
  isTyping: boolean
  searchIconRef: any
  transitionIcon: any
  recipes: any
}

const Home: React.FC<IProps> = ({
  searchValue,
  onSearch,
  displaySearchIcon,
  isTyping,
  searchIconRef,
  transitionIcon,
  recipes,
}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)
  const renderItem = ({item}) => {
    return <RecipeCard item={item} />
  }
  return (
    <View style={s.container}>
      <Text style={s.header}>All Recipes</Text>
      <Transitioning.View
        ref={searchIconRef}
        transition={transitionIcon}
        style={s.searchWrapper}>
        {displaySearchIcon ? <SearchIcon /> : null}
        <TextInput
          placeholder={'Find Recipe'}
          style={s.searchInput}
          onChangeText={text => onSearch(text)}
          defaultValue={searchValue}
          placeholderTextColor={'#828282'}
        />
      </Transitioning.View>
      <FlatList data={recipes} renderItem={renderItem} numColumns={2} />
    </View>
  )
}

export default Home
