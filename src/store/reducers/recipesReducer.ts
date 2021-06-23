import {
  IRecipesState,
  RecipesActions,
  RecipesActionTypes,
} from '../../types/recipes'

const recipes = {
  recipes: null,
  recipesError: null,
}

export const recipesReducer = (
  state: IRecipesState = recipes,
  action: RecipesActions,
): IRecipesState => {
  switch (action.type) {
    case RecipesActionTypes.FETCH_RECIPES:
      return {
        ...state,
      }
    case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        recipesError: null,
      }
    case RecipesActionTypes.FETCH_RECIPES_FAILED:
      return {
        ...state,
        recipesError: action.payload,
      }

    default:
      return state
  }
}
