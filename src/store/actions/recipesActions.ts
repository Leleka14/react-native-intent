import {
  FetchRecipes,
  FetchRecipesFailed,
  FetchRecipesSuccess,
  IRecipe,
  RecipesActionTypes,
} from '../../types/recipes'

export const fetchRecipes = (): FetchRecipes => ({
  type: RecipesActionTypes.FETCH_RECIPES,
})

export const fetchRecipesSuccess = (
  payload: Array<IRecipe>,
): FetchRecipesSuccess => ({
  type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
  payload: payload,
})

export const fetchRecipesFailed = (payload: string): FetchRecipesFailed => ({
  type: RecipesActionTypes.FETCH_RECIPES_FAILED,
  payload: payload,
})
