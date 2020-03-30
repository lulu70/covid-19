import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"

const PagesWrapper = ({ location, children }) => {
  return (
    <TransitionProvider location={location}>
      <TransitionViews>{children}</TransitionViews>
    </TransitionProvider>
  )
}

export default PagesWrapper
