import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import {recipesReducer} from './reducers/recipesReducer'
import {watchFetchRecipes} from './sagas/recipesSaga'

const saga = createSagaMiddleware()
export const rootReducer = combineReducers({
  recipesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saga)),
)

saga.run(watchFetchRecipes)
