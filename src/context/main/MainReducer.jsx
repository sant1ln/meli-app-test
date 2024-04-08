import { types } from "../../../types/types"


export const initialMainState = {}

export const MainReducer = (state = initialCardState, action) => {
  switch (action) {
    case types.setAllCards:
      return {
        ...state,
        cards: action.payload
      }
    case types.selectCard:
      return {
        ...state,
        selectedCard: action.payload
      }
  }
}