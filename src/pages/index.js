import React from "react"
import Layout from "../components/layout"
import useFetch from "../hooks/useFeatch"
import SEO from "../components/seo"
import useFetchCountries from "../hooks/useFetchCountries"

const Country = ({ country }) => {
  return (
    <div className="container">
      <h2>{country.name} :</h2>
      <ul>
        <li>LastUpdate: {new Date(country.lastUpdate).toDateString()}</li>
        <li>Confirmed: {country.confirmed.value}</li>
        <li>Recovered: {country.recovered.value}</li>
        <li>Deaths: {country.deaths.value}</li>
      </ul>
    </div>
  )
}
const Countries = ({ countries }) => {
  const { loading, data } = useFetchCountries(countries)
  if (loading) return <h1>Loading...</h1>
  if (!loading)
    return data
      .sort((a, b) => b.confirmed.value - a.confirmed.value)
      .map((country, i) => <Country key={i} country={country} />)
}

const IndexPage = () => {
  const { data, loading, error } = useFetch(
    "https://covid19.mathdro.id/api/countries"
  )
  return (
    <Layout>
      <SEO title="Home" />
      {loading && <h1>Loading...</h1>}
      {!loading && !error && (
        <Countries countries={Object.keys(data.countries)} />
      )}
    </Layout>
  )
}

export default IndexPage
