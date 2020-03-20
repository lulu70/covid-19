import React from "react"
import Layout from "../components/layout"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import { scaleLinear } from "d3-scale"
import Loader from "react-loader"
import EarthScene from "../components/EarthScene"
import Selector from "../components/Selector"
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
    <Layout>
      <SEO />
      {error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {loading && <Loader color="white" />}
      {!loading && !error && (
        <>
          <Selector
            currentCountry={currentCountry}
            calculateColor={calculateColor}
            setCurrentCountry={setCurrentCountry}
            data={data}
          />
          <EarthScene color={currentCountry.color} />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
