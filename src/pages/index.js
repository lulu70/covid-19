import React from "react"
import Layout from "../components/layout"
import useFetch from "../hooks/useFeatch"
import SEO from "../components/seo"

const Country = ({ country }) => {
  const { data, loading, error } = useFetch(
    `https://covid19.mathdro.id/api/countries/${country}`
  )
  if (error) return <span />
  if (loading) return <h1>Loading...</h1>
  return (
    <>
      <h3>{country} :</h3>
      <ul>
        <li>LastUpdate: {new Date(data.lastUpdate).toDateString()}</li>
        <li>Confirmed: {data.confirmed.value}</li>
        <li>Recovered: {data.recovered.value}</li>
        <li>Deaths: {data.deaths.value}</li>
      </ul>
    </>
  )
}

const IndexPage = () => {
  const { data, loading, error } = useFetch(
    "https://covid19.mathdro.id/api/countries"
  )
  return (
    <Layout>
      <SEO title="Home" />
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {!loading &&
        !error &&
        Object.keys(data.countries).map(country => (
          <Country key={country} country={country} />
        ))}
    </Layout>
  )
}

export default IndexPage
