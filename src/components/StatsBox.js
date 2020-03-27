import React from "react"
import calculatePercentage from "../helpers/calculatePercentage"
import Bar from "./Bar"
import useStateContext from "../hooks/useStateContext"

const StatsBox = () => {
  const { currentCountry } = useStateContext()
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
  const normalizeName = word => {
    if (word.includes(",")) {
      const arr = word.split("")
      const slicedArr = arr.slice(0, arr.indexOf(","))
      return slicedArr.join("")
    } else return word
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        flex: 2,
      }}
    >
      <h4
        style={{
          fontWeight: "normal",
          marginBottom: lineHeight,
        }}
      >
        {normalizeName(currentCountry.country)}
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
