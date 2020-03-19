import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import Country from "../components/Country"

const Countries = ({ countries }) => {
  const { loading, data } = useFetchCountries(countries)
  if (loading) return <h1>Loading...</h1>
  if (!loading)
    return data
      .sort((a, b) => b.confirmed.value - a.confirmed.value)
      .map((country, i) => <Country key={i} country={country} />)
}

export default Countries
