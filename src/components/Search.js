import React from "react"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import calculateColor from "../helpers/calculateColor"
import Select from "react-select"

const Search = () => {
  const { data, currentCountry } = useStateContext()
  const [dispatch, { setCurrentCountry }] = useDispatchContext()

  const handleChange = e => {
    if (e.value === "global") {
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
        ({ countryInfo }) => countryInfo.iso2 === e.value
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
  const customSelectStyles = {
    dropdownIndicator: () => ({
      display: "none",
    }),
    indicatorSeparator: () => null,
    container: provided => ({
      ...provided,
      display: "flex",
      flex: 1,
    }),
    input: provided => ({
      ...provided,
      color: "white",
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: "black",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3a3b3c" : "black",
      color: "white",
    }),
    control: () => ({
      backgroundColor: "#3a3b3c",
      flex: 1,
      borderRadius: "1rem",
    }),
  }
  const options = data.countries.map(({ country, countryInfo }) => ({
    value: countryInfo.iso2,
    label: country,
  }))
  return (
    <Select
      value={currentCountry.countryInfo.iso2}
      onChange={handleChange}
      placeholder="Search..."
      styles={customSelectStyles}
      options={options}
    />
  )
}

export default Search
