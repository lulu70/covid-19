import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import calculateColor from "../helpers/calculateColor"
import "../components/layout.css"
import Stats from "../components/Stats"

const IndexPage = () => {
  const { data, loading, error } = useFetchCountries()
  const [currentCountry, setCurrentCountry] = React.useState("")
  const [countryClicked, setCountryClicked] = React.useState(false)

  // set initial state after data received to global
  React.useEffect(() => {
    if (!error && !loading) {
      const color = calculateColor(data.all)
      setCurrentCountry({
        color,
        country: "Global",
        ...data.all,
      })
    }
  }, [error, loading, data])

  //click handler
  const handleClick = e => {
    setCountryClicked(true)
    const name = e.target.getAttribute("data-name")
    const selectedCountry = data.countries.find(
      ({ country }) => country === name
    )
    const color = calculateColor(selectedCountry)
    setCurrentCountry({
      color,
      ...selectedCountry,
    })
  }

  return (
    <div>
      <SEO />
      {error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {loading && <Loader color="white" />}
      {!loading && !error && (
        <div style={{ display: "flex", position: "relative", color: "white" }}>
          <Stats
            data={data}
            currentCountry={currentCountry}
            setCurrentCountry={setCurrentCountry}
            countryClicked={countryClicked}
            setCountryClicked={setCountryClicked}
          />

          <SVGManager
            currentCountry={currentCountry}
            countries={data.countries}
            handleClick={handleClick}
          />
        </div>
      )}
    </div>
  )
}

export default IndexPage
