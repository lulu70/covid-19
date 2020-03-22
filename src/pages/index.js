import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import { scaleLinear } from "d3-scale"
import Loader from "react-loader"
import Selector from "../components/Selector"
import SVG from "../components/SVG"
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
  const calculateColor = data => {
    const confirmed = data.cases
    const deaths = data.deaths
    const recovered = data.recovered
    const colorScale = scaleLinear([0, confirmed - deaths], ["red", "blue"])
    return colorScale(recovered)
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
          <pre>{JSON.stringify(currentCountry, null, 2)}</pre>
          <Selector
            currentCountry={currentCountry}
            calculateColor={calculateColor}
            setCurrentCountry={setCurrentCountry}
            data={data}
          />
          <SVG />
        </div>
      )}
    </div>
  )
}

export default IndexPage
