import React from "react"
import calculatePercentage from "../helpers/calculatePercentage"
import Bar from "./Bar"
import useStateContext from "../hooks/useStateContext"
import EarthScene from "./EarthScene"

const StatsBox = () => {
  const { currentCountry } = useStateContext()
  const {
    deathPercentage,
    recoveredPercentage,
    activePercentage,
  } = calculatePercentage(currentCountry)
  const lineHeight = "1rem"
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
      className="statsBox__container"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <EarthScene color={currentCountry.color} />
      </div>
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
    </div>
  )
}
export default StatsBox
