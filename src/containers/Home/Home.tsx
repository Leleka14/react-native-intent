import React from 'react'
import {ActivityIndicator, FlatList, Text, TextInput, View} from 'react-native'
import {Transitioning} from 'react-native-reanimated'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import {SearchIcon, ErrorIcon} from '../../assets/icons/Icons'
import styles from './styles'

interface IProps {
  searchValue: string
  onSearch(text: string): void
  displaySearchIcon: boolean
  isTyping: boolean
  searchIconRef: any
  transitionIcon: any
  recipes: any
  onRecipePressed(item: any): void
  error: string | null
}

const Home: React.FC<IProps> = ({
  searchValue,
  onSearch,
  displaySearchIcon,
  isTyping,
  searchIconRef,
  transitionIcon,
  recipes,
  onRecipePressed,
  error,
}) => {
  const insets = useSafeAreaInsets()
  const s = styles(insets)
  const renderItem = ({item}: any) => {
    return <RecipeCard item={item} onPress={onRecipePressed} />
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
      {isTyping ? (
        <View style={s.spinnerWrapper}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : error || recipes.length === 0 ? (
        <View style={s.errorWrapper}>
          <ErrorIcon />
          <Text style={s.errorText}>
            Ooops, nothing was found,{'\n'}please try again later...
          </Text>
        </View>
      ) : (
        <FlatList
          data={recipes}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item: any) => item.title}
          style={s.list}
        />
      )}
    </View>
  )
}

export default Home
