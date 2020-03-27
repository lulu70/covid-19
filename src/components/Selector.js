import React from "react"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import calculateColor from "../helpers/calculateColor"
const Selector = () => {
  const { data, currentCountry } = useStateContext()
  const [dispatch, { setCurrentCountry }] = useDispatchContext()

  const handleChange = e => {
    if (e.target.value === "global") {
      const color = calculateColor(data.all)
      dispatch(
        setCurrentCountry({
          color,
          country: "Global",
          countryInfo: {
            iso2: "global",
          },
          active: data.all.cases - data.all.deaths - data.all.recovered,
          ...data.all,
        })
      )
    } else {
      const selectedCountry = data.countries.find(
        ({ countryInfo }) => countryInfo.iso2 === e.target.value
      )
      const color = calculateColor(selectedCountry)
      dispatch(
        setCurrentCountry({
          color,
          ...selectedCountry,
        })
      )
    }
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        flex: 1,
        fontFamily: "none",
      }}
    >
      <h3 style={{ fontWeight: "normal" }}>{currentCountry.country}</h3>
      <ul>
        <li style={{ color: "red" }}>Active: {currentCountry.active}</li>
        <li style={{ color: "#4badff" }}>
          Recovered: {currentCountry.recovered}
        </li>
        <li>Deaths: {currentCountry.deaths}</li>
      </ul>
      <label htmlFor="countries">Countries :</label>
      <select
        id="countries"
        onBlur={null}
        value={currentCountry.countryInfo.iso2}
        onChange={handleChange}
      >
        <option value="global">Global</option>
        {data.countries.map(({ country, countryInfo }) =>
          countryInfo.iso2 ? (
            <option key={country} value={countryInfo.iso2}>
              {country}
            </option>
          ) : null
        )}
      </select>
    </div>
  )
}

export default Selector
