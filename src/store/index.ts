import AsyncStorage from '@react-native-async-storage/async-storage'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'

const saga = createSagaMiddleware()
export const rootReducer = combineReducers({
  recepiesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(composeWithDevTools(applyMiddleware(saga)))

// saga.run(watchUpdateDefaultLedgerWithFetch)
