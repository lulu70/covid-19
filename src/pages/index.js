import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import "../components/layout.css"
import useStateContext from "../hooks/useStateContext"
import Layout from "../components/layout"
import StatsBox from "../components/StatsBox"
const IndexPage = () => {
  useFetchCountries()

  const { dataStatus, error } = useStateContext()

  return (
    <Layout>
      <SEO />
      {dataStatus === "ERROR" && (
        <div
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>
            An error loading the data, <br />
            Try refreshing the page{" "}
          </h1>
          <p>{error && error.message && error.message}</p>
        </div>
      )}
      {dataStatus === "LOADING" && <Loader color="white" />}
      {dataStatus === "SUCCESS" && (
        <div
          style={{
            display: "flex",
            position: "relative",
            color: "white",
            flex: 1,
          }}
        >
          <StatsBox />
          <SVGManager />
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
