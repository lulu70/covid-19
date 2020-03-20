import React from "react"
import Layout from "../components/layout"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import { scaleLinear } from "d3-scale"
import Loader from "react-loader"
import EarthScene from "../components/EarthScene"
const IndexPage = () => {
  const { data, loading, error } = useFetchCountries()
  const [currentCountry, setCurrentCountry] = React.useState("")

  React.useEffect(() => {
    if (!error && !loading) {
      const color = calculateColor(data.all)
      setCurrentCountry({
        color,
        country: "global",
        ...data.all,
      })
    }
  }, [error, loading, data])
  const calculateColor = data => {
    const confirmed = data.cases
    const deaths = data.deaths
    const recovered = data.recovered
    const colorScale = scaleLinear([0, confirmed - deaths], ["red", "blue"])
    return colorScale(recovered)
  }

  return (
    <Layout>
      <SEO title="Home" />
      {error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {loading && <Loader color="white" />}
      {!loading && !error && (
        <>
          <ul>
            <li>{currentCountry.country}</li>
            <li>Confirmed: {currentCountry.cases}</li>
            <li>Recovered: {currentCountry.recovered}</li>
            <li>Deaths: {currentCountry.deaths}</li>
          </ul>
          <label htmlFor="countries">Change Country :</label>
          <select
            id="countries"
            onBlur={null}
            onChange={e => {
              if (e.target.value === "global") {
                const color = calculateColor(data.all)
                setCurrentCountry({
                  color,
                  country: "global",
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
            <option>global</option>
            {data.countries.map(({ country }) => (
              <option key={country}>{country}</option>
            ))}
          </select>
          <EarthScene color={currentCountry.color} />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
