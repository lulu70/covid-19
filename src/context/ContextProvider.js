import React from "react"
import reducer from "./reducers/reducer"
import { initialState } from "./reducers/reducer"

export const StateContext = React.createContext()
export const DispatchContext = React.createContext()

const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default ContextProvider
