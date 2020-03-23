import React from "react"
import calculatePercentage from "../helpers/calculatePercentage"
import Bar from "./Bar"

const StatsBox = ({ index, currentCountry, setCountryClicked }) => {
  React.useEffect(() => {
    const handleClick = () => {
      setCountryClicked(false)
    }
    if (index === 1) document.addEventListener("mousedown", handleClick)
    return () => {
      if (index === 1) document.removeEventListener("mousedown", handleClick)
    }
  }, [index, setCountryClicked])
  const {
    deathPercentage,
    recoveredPercentage,
    liveConfirmedPercentage,
  } = calculatePercentage(currentCountry)

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        width: "20%",
        padding: "1rem",
        borderRadius: "15%",
      }}
    >
      <h3
        style={{
          fontWeight: "normal",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        {currentCountry.country}
      </h3>
      <ul style={{ listStyleType: "none", margin: 0, fontSize: "0.8rem" }}>
        <li style={{ color: "red" }}>
          Confirmed and alive:{" "}
          {currentCountry.cases -
            currentCountry.recovered -
            currentCountry.deaths}
        </li>
        <Bar color="red" width={liveConfirmedPercentage} />
        <li style={{ color: "#4badff" }}>
          Recovered: {currentCountry.recovered}
        </li>
        <Bar color="blue" width={recoveredPercentage} />
        <li>Deaths: {currentCountry.deaths}</li>
        <Bar color="white" width={deathPercentage} />
      </ul>
    </div>
  )
}
export default StatsBox
