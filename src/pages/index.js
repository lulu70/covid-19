import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import { scaleLinear } from "d3-scale"
import Loader from "react-loader"
import Selector from "../components/Selector"
import BackgroundImage from "../components/bgImage"
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
        <BackgroundImage fileName="one.jpg">
          <div
            className="overlay"
            style={{
              backgroundColor: currentCountry.color,
              width: "100%",
              height: "100%",
              opacity: "0.2",
              position: "absolute",
            }}
          />
          <Selector
            currentCountry={currentCountry}
            calculateColor={calculateColor}
            setCurrentCountry={setCurrentCountry}
            data={data}
          />
        </BackgroundImage>
      )}
    </div>
  )
}

export default IndexPage
