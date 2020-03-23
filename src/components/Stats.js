import React from "react"
import OutsideClickWrapper from "./OutsideClickWrapper"
import calculateColor from "../helpers/calculateColor"

const Stats = ({ data, currentCountry, setCurrentCountry }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <OutsideClickWrapper
        onOutsideClick={() => {
          setCurrentCountry({
            color: calculateColor(data.all),
            country: "Global",
            ...data.all,
          })
        }}
        style={{
          backgroundColor: "black",
          width: "20%",
        }}
      >
        <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
          {currentCountry.country}
        </h3>
        <ul>
          <li style={{ color: "red" }}>Confirmed: {currentCountry.cases}</li>
          <li style={{ color: "#4badff" }}>
            Recovered: {currentCountry.recovered}
          </li>
          <li>Deaths: {currentCountry.deaths}</li>
        </ul>
      </OutsideClickWrapper>
    </div>
  )
}

export default Stats
