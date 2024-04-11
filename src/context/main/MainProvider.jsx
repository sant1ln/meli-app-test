import { useReducer } from "react"
import { MainReducer, initialMainState } from "./MainReducer"
import { MainContext } from "./MainContext"
import { types } from "../../types/types"

export const MainProvider = ({children}) => {

  const [mainState, dispatch] = useReducer(MainReducer, initialMainState)


  const setCategories = (categories) => ({
    type: types.setCategories,
    payload: categories
  })

  return (
    <MainContext.Provider value={{mainState,dispatch}}>
      {children}
    </MainContext.Provider>
  )
}