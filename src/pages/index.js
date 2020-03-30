import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
// import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import "../components/layout.css"
import useStateContext from "../hooks/useStateContext"
import Layout from "../components/layout"
import StatsBox from "../components/StatsBox"
import { Link } from "gatsby"

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
      {/* {dataStatus === "LOADING" && setTimeout(<Loader color="white" />, 2000)} */}
      {dataStatus === "SUCCESS" && (
        <div style={{ flex: 1 }}>
          <div
            className="index__innerContainer"
            style={{
              display: "flex",
              color: "white",
              flex: 1,
            }}
          >
            <StatsBox />
            <SVGManager />
          </div>
          <Link to="/3d-model" style={{ color: "#00ff41" }}>
            3d model
          </Link>
          <p
            style={{
              color: "white",
              fontSize: "0.8rem",
              margin: "1rem 0",
            }}
          >
            This is a visual representation of the covid-19 (corona) virus
            epidemic state of recovery, globally and in each country separately.{" "}
            <br />
            When a country on the map is pressed, its color is changing based on
            the number of confirmed cases and recovery cases.
            <br /> Confirmed cases are representing by the red color and
            recovered cases by the blue color.
          </p>
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
