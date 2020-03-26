import React from "react"
import useDispatchContext from "../hooks/useDispatchContext"
import useStateContext from "../hooks/useStateContext"
import Pusher from "pusher-js"
import calculateColor from "../helpers/calculateColor"

const usePusher = () => {
  const { dataStatus, data } = useStateContext()

  const [
    dispatch,
    { setCountryClicked, setCurrentCountry },
  ] = useDispatchContext()
  const [channel, setChannel] = React.useState()

  React.useEffect(() => {
    Pusher.logToConsole = true
    const pusher = new Pusher("e04a1504b8755f56aee1", {
      cluster: "eu",
      forceTLS: true,
    })
    setChannel(pusher.subscribe("covid-19"))
  }, [])

  React.useEffect(() => {
    console.log("effect")
    channel &&
      channel.bind("my-event", ({ message }) => {
        if (dataStatus !== "SUCCESS") return
        if (message === "CLOSE") {
          dispatch(setCountryClicked(false))
          return
        }
        const selectedCountry = data.countries.find(
          ({ countryInfo }) => countryInfo.iso2 === message
        )
        if (!selectedCountry) return
        const color = calculateColor(selectedCountry)
        dispatch(
          setCurrentCountry({
            color,
            ...selectedCountry,
          })
        )
        dispatch(setCountryClicked(true))
      })
  }, [
    data,
    dataStatus,
    dispatch,
    setCountryClicked,
    setCurrentCountry,
    channel,
  ])
}

export default usePusher
