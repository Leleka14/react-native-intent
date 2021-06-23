import {RecipesActionTypes} from '../../types/recipes'
import {takeEvery, put, call, select, SagaReturnType} from 'redux-saga/effects'
import {
  fetchRecipesFailed,
  fetchRecipesSuccess,
} from '../actions/recipesActions'

function* workerFetchRecipes() {
  try {
    console.log('here')
    let recipes = [
      {
        title: 'recipe1',
      },
      {
        title: 'recipe2',
      },
    ]
    if (recipes.length > 0) {
      yield put(fetchRecipesSuccess(recipes))
    } else {
      throw new Error('Nothing was found(((')
    }
  } catch (e) {
    yield put(fetchRecipesFailed(e.message))
    console.log(e)
  }
}

export function* watchFetchRecipes() {
  yield takeEvery(RecipesActionTypes.FETCH_RECIPES, workerFetchRecipes)
}
