import React from "react"
import calculatePercentage from "../helpers/calculatePercentage"
import Bar from "./Bar"
import useDispatchContext from "../hooks/useDispatchContext"
import useStateContext from "../hooks/useStateContext"

const StatsBox = ({ index }) => {
  const [dispatch, { setCountryClicked }] = useDispatchContext()
  const { currentCountry } = useStateContext()
  React.useEffect(() => {
    const handleClick = () => {
      dispatch(setCountryClicked(false))
    }
    if (index === 1) document.addEventListener("mousedown", handleClick)
    return () => {
      if (index === 1) document.removeEventListener("mousedown", handleClick)
    }
  }, [index, dispatch, setCountryClicked])
  const {
    deathPercentage,
    recoveredPercentage,
    activePercentage,
  } = calculatePercentage(currentCountry)
  const lineHeight = "0.7rem"
  const liBasicStyle = {
    margin: 0,
    lineHeight,
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "20%",
      }}
    >
      <h4
        style={{
          fontWeight: "normal",
          marginBottom: lineHeight,
        }}
      >
        {currentCountry.country}
      </h4>
      <ul style={{ listStyleType: "none", margin: 0, fontSize: lineHeight }}>
        <li style={{ ...liBasicStyle, color: "red" }}>
          Active: {currentCountry.active}
        </li>
        <Bar color="red" width={activePercentage} />
        <li style={{ ...liBasicStyle, color: "#4badff" }}>
          Recovered: {currentCountry.recovered}
        </li>
        <Bar color="blue" width={recoveredPercentage} />
        <li style={{ ...liBasicStyle }}>Deaths: {currentCountry.deaths}</li>
        <Bar color="white" width={deathPercentage} />
      </ul>
    </div>
  )
}
export default StatsBox
