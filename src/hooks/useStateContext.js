import React from "react"
import { StateContext } from "../context/ContextProvider"

function useStateContext() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error("useStateContext must be used within a ContextProvider")
  }
  return context
}
export default useStateContext
