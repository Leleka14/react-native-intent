export enum RecipesActionTypes {
  FETCH_RECIPES = 'FETCH_RECIPES',
}

export interface IRecipesState {
  recipes: null | Array<IRecipe>
}

export interface IRecipe {
  title?: any
}

export interface FetchRecipes {
  type: RecipesActionTypes.FETCH_RECIPES
  payload: Array<IRecipe>
}

export type RecipesActions = FetchRecipes
