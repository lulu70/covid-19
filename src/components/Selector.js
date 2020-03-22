import React from "react"

const Selector = ({
  data,
  currentCountry,
  calculateColor,
  setCurrentCountry,
}) => (
  <div
    style={{
      color: "white",
      // width: "100%",
      // height: "100%"
      flex: 1,
      padding: "1rem",
      fontFamily: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    }}
  >
    <div
      style={{
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <label htmlFor="countries">Countries :</label>
      <select
        id="countries"
        onBlur={null}
        value={currentCountry.country}
        onChange={e => {
          if (e.target.value === "Global") {
            const color = calculateColor(data.all)
            setCurrentCountry({
              color,
              country: "Global",
              ...data.all,
            })
          } else {
            const selectedCountry = data.countries.find(
              ({ country }) => country === e.target.value
            )
            const color = calculateColor(selectedCountry)
            setCurrentCountry({
              color,
              ...selectedCountry,
            })
          }
        }}
      >
        <option>Global</option>
        {data.countries.map(({ country }) => (
          <option key={country}>{country}</option>
        ))}
      </select>
    </div>
    <div>
      <h3 style={{ fontWeight: "normal" }}>{currentCountry.country}</h3>
      <ul>
        <li style={{ color: "red" }}>Confirmed: {currentCountry.cases}</li>
        <li style={{ color: "#4badff" }}>
          Recovered: {currentCountry.recovered}
        </li>
        <li>Deaths: {currentCountry.deaths}</li>
      </ul>
    </div>
  </div>
)

export default Selector
