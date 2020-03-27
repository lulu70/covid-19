import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import "../components/layout.css"
import useStateContext from "../hooks/useStateContext"
import Layout from "../components/layout"
import StatsBox from "../components/StatsBox"
import { Link } from "gatsby"
const EarthModelPage = () => {
  useFetchCountries()
  const { dataStatus, error } = useStateContext()

  return (
    <Layout>
      <SEO title="3d model|covid-19 state of recovery" />
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
          <Link to="/">Check out an interactive map</Link>
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
            The color of the globe 3d model is changing based on the number of
            confirmed cases and recovery cases.
            <br /> Confirmed cases are representing by the red color and
            recovered cases by the blue color.
          </p>
        </div>
      )}
    </Layout>
  )
}

export default EarthModelPage
