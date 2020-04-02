import React from "react"
import ContextProvider from "./src/context/ContextProvider"
import loadPolyfills from "./src/helpers/loadPolyfills"
export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
export const shouldUpdateScroll = () => {
  return false
}

export const onClientEntry = async () => {
  await loadPolyfills()
}
