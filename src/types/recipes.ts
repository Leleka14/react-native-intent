export enum RecipesActionTypes {
  FETCH_RECIPES = 'FETCH_RECIPES',
  FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS',
  FETCH_RECIPES_FAILED = 'FETCH_RECIPES_FAILED',
}

export interface IRecipesState {
  recipes: null | Array<IRecipe>
  recipesError: string | null
}

export interface IRecipe {
  title?: any
}

export interface FetchRecipes {
  type: RecipesActionTypes.FETCH_RECIPES
}

export interface FetchRecipesSuccess {
  type: RecipesActionTypes.FETCH_RECIPES_SUCCESS
  payload: Array<IRecipe>
}

export interface FetchRecipesFailed {
  type: RecipesActionTypes.FETCH_RECIPES_FAILED
  payload: string
}
export type RecipesActions =
  | FetchRecipes
  | FetchRecipesSuccess
  | FetchRecipesFailed
