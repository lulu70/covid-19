import React from "react"

const Selector = ({
  data,
  currentCountry,
  calculateColor,
  setCurrentCountry,
}) => (
  <div
    style={{
      backgroundColor: "black",
      color: "white",
      flex: 1,
    }}
  >
    <li>{currentCountry.country}</li>
    <ul>
      <li>Confirmed: {currentCountry.cases}</li>
      <li>Recovered: {currentCountry.recovered}</li>
      <li>Deaths: {currentCountry.deaths}</li>
    </ul>
    <label htmlFor="countries">Change Country :</label>
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
)

export default Selector
