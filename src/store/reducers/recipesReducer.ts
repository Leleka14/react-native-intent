import {
  IRecipesState,
  RecipesActions,
  RecipesActionTypes,
} from '../../types/recipes'

const recipes = {
  recipes: null,
}

export const recipesReducer = (
  state: IRecipesState = recipes,
  action: RecipesActions,
): IRecipesState => {
  switch (action.type) {
    case RecipesActionTypes.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      }

    default:
      return state
  }
}
