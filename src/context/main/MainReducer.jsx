import { types } from "../../types/types"

export const initialMainState = {}

export const MainReducer = (state = initialCardState, action) => {
  switch (action.type) {
    case types.setCategories:
      console.log(action)
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}