import React from "react"
import { DispatchContext } from "../context/ContextProvider"
import { actions } from "../context/reducers/reducer"

function useDispatchContext() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error("useDispatchContext must be used within a ContextProvider")
  }
  return [context, actions]
}
export default useDispatchContext
