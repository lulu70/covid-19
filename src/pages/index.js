import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import Loader from "react-loader"
import Selector from "../components/Selector"
import SVGManager from "../components/SVGManager"
import calculateColor from "../helpers/calculateColor"

const IndexPage = () => {
  const { data, loading, error } = useFetchCountries()
  const [currentCountry, setCurrentCountry] = React.useState("")

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
  const handleClick = e => {
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
        <div style={{ display: "flex", color: "white" }}>
          <Selector
            currentCountry={currentCountry}
            calculateColor={calculateColor}
            setCurrentCountry={setCurrentCountry}
            data={data}
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
