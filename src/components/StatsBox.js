import React from "react"
import Bar from "./Bar"
import calculatePercentage from "../helpers/calculatePercentage"
import useStateContext from "../hooks/useStateContext"

const StatsBox = () => {
  const { currentCountry } = useStateContext()
  const lineHeight = "1rem"
  const normalizeName = word => {
    if (word.includes(",")) {
      const arr = word.split("")
      const slicedArr = arr.slice(0, arr.indexOf(","))
      return slicedArr.join("")
    } else return word
  }
  const {
    deathPercentage,
    recoveredPercentage,
    activePercentage,
  } = calculatePercentage(currentCountry)
  const liBasicStyle = {
    margin: 0,
    lineHeight,
  }
  return (
    <div>
      <h3
        style={{
          fontWeight: "normal",
          marginBottom: lineHeight,
        }}
      >
        {normalizeName(currentCountry.country)}
      </h3>
      <ul style={{ listStyleType: "none", margin: 0, fontSize: lineHeight }}>
        <li style={{ ...liBasicStyle, color: "red" }}>
          Active: {currentCountry.active}
        </li>
        <Bar color="red" width={activePercentage} />
        <li
          style={{
            ...liBasicStyle,
            color: "#4badff",
          }}
        >
          Recovered: {currentCountry.recovered}
        </li>
        <Bar color="blue" width={recoveredPercentage} />
        <li style={{ ...liBasicStyle, color: "grey" }}>
          Deaths: {currentCountry.deaths}
        </li>
        <Bar color="grey" width={deathPercentage} />
      </ul>
    </div>
  )
}

export default StatsBox
