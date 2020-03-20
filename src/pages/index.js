import React from "react"
import Layout from "../components/layout"
import useFetch from "../hooks/useFeatch"
import SEO from "../components/seo"
import { scaleLinear } from "d3-scale"
import Loader from "react-loader"
import EarthScene from "../components/EarthScene"
const IndexPage = () => {
  const { data, loading, error } = useFetch(
    "https://coronavirus-19-api.herokuapp.com/all"
  )
  const [color, setColor] = React.useState("")

  React.useEffect(() => {
    if (!error && !loading) {
      const confirmed = data.cases
      const deaths = data.deaths
      const recovered = data.recovered
      const colorScale = scaleLinear([0, confirmed - deaths], ["red", "blue"])
      const recoveredColor = colorScale(recovered)
      setColor(recoveredColor)
    }
  }, [error, loading, data])
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
      {!loading && !error && <EarthScene color={color} />}
    </Layout>
  )
}

export default IndexPage
