import React from "react"
import Loader from "react-loader"

const TimedLoader = () => {
  const [showLoader, setShowLoader] = React.useState(false)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return showLoader ? <Loader color="white" /> : null
}

export default TimedLoader
