import React, {useEffect, useRef, useState} from 'react'
import useDebounce from '../../hooks/useDebounce'
import Home from './Home'
import {Transition} from 'react-native-reanimated'
import {useNavigation} from '@react-navigation/core'
import {useTypedSelector, } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'  
 
const HomeContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const {fetchRecipes} = useActions() 
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const navigation = useNavigation()

  const transitionIcon = (
    <Transition.Change durationMs={200} interpolation="easeInOut" />
  )

  const {recipes} = useTypedSelector(({recipesReducer}) => ({
    recipes: recipesReducer?.recipes ? recipesReducer.recipes : []
  }))
 
  useEffect(() => {
    if (debouncedSearchValue) {
      fetchRecipes()
    } else {
      fetchRecipes()
    }
    setIsTyping(false)
  }, [debouncedSearchValue])

  useEffect(() => {
    if (searchValue.length > 0) {
      setDisplaySearchIcon(false)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    } else {
      setDisplaySearchIcon(true)
      if (searchIconRef) {
        searchIconRef.current.animateNextTransition()
      }
    }
  }, [searchValue])

  const onSearch = (text: string) => {
    setIsTyping((!!debouncedSearchValue && debouncedSearchValue.length !== 0) || debouncedSearchValue !== searchValue)
    setSearchValue(text)
  }

  const onRecipePressed = (item:any) => {
    navigation.navigate('Recipe', {
      item: item,
    })
  }

  return (
    <Home
      searchValue={searchValue}
      onSearch={onSearch}
      displaySearchIcon={displaySearchIcon}
      isTyping={isTyping}
      searchIconRef={searchIconRef}
      transitionIcon={transitionIcon}
      recipes={recipes}
      onRecipePressed={onRecipePressed}
    />
  )
}

export default HomeContainer
