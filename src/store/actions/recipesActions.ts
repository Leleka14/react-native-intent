import {FetchRecipes, IRecipe, RecipesActionTypes} from '../../types/recipes'

export const fetchRecipes = (payload: Array<IRecipe>): FetchRecipes => ({
  type: RecipesActionTypes.FETCH_RECIPES,
  payload: payload,
})
