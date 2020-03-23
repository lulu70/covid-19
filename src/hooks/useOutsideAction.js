import React from "react"

function useOutsideAction(ref, onOutsideClick) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick()
    }
  }

  React.useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
}

export default useOutsideAction
