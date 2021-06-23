import React, {useEffect, useRef, useState} from 'react'
import useDebounce from '../../hooks/useDebounce'
import Home from './Home'
import {Transition} from 'react-native-reanimated'

const HomeContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)
  // const {fetchTransactionsBySearch, fetchTransactions} = useActions()
  const [displaySearchIcon, setDisplaySearchIcon] = useState<boolean>(true)
  const searchIconRef: any = useRef(null)
  const debouncedSearchValue: string = useDebounce(searchValue, 800)
  const transitionIcon = (
    <Transition.Change durationMs={200} interpolation="easeInOut" />
  )

  const recipes = [
    {
      title: 'dfaf',
    },
    {
      title: 'sdfsaf',
    },
  ]
  useEffect(() => {
    // if (debouncedSearchValue) {
    //   fetchTransactionsBySearch({
    //     searchValue: searchValue,
    //     fromPosition: 0,
    //     size: 10,
    //     initFetch: true,
    //   })
    // } else {
    //   fetchTransactions()
    // }
    setIsTyping(false)
  }, [debouncedSearchValue])

  const onSearch = (text: string) => {
    setIsTyping(!!debouncedSearchValue && debouncedSearchValue.length !== 0)
    setSearchValue(text)
  }

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

  return (
    <Home
      searchValue={searchValue}
      onSearch={onSearch}
      displaySearchIcon={displaySearchIcon}
      isTyping={isTyping}
      searchIconRef={searchIconRef}
      transitionIcon={transitionIcon}
      recipes={recipes}
    />
  )
}

export default HomeContainer
