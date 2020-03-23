import React from "react"
import useOutsideAction from "../hooks/useOutsideAction"

function OutsideClickWrapper({ onOutsideClick, ...props }) {
  const wrapperRef = React.useRef(null)
  useOutsideAction(wrapperRef, onOutsideClick)

  return <div ref={wrapperRef} {...props} />
}

export default OutsideClickWrapper
