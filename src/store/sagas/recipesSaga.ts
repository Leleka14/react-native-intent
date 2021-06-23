import {RecipesActionTypes} from '../../types/recipes'
import {takeEvery, put, call, select, SagaReturnType} from 'redux-saga/effects'

function* workerFetchRecipes() {
  try {
    console.log('here')
  } catch (e) {
    console.log(e)
  }
}

export function* watchFetchRecipes() {
  yield takeEvery(RecipesActionTypes.FETCH_RECIPES, workerFetchRecipes)
}
