import { useReducer } from "react"
import { MainReducer, initialMainState } from "./MainReducer"
import { MainContext } from "./MainContext"

export const MainProvider = ({children}) => {

  const [mainState, dispatch] = useReducer(MainReducer, initialMainState)

  return (
    <MainContext.Provider value={{mainState,dispatch}}>
      {children}
    </MainContext.Provider>
  )
}