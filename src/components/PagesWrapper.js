import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import GlobalStyles from "./GlobalStyles"
const PagesWrapper = ({ location, children }) => {
  return (
    <TransitionProvider location={location}>
      <GlobalStyles />
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default PagesWrapper
