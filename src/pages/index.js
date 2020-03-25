import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import "../components/layout.css"
import Stats from "../components/Stats"
import useStateContext from "../hooks/useStateContext"
import usePusher from "../hooks/usePusher"
const IndexPage = () => {
  useFetchCountries()
  usePusher()

  const { dataStatus, error } = useStateContext()

  return (
    <div>
      <SEO />
      {dataStatus === "ERROR" && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {dataStatus === "LOADING" && <Loader color="white" />}
      {dataStatus === "SUCCESS" && (
        <div style={{ display: "flex", position: "relative", color: "white" }}>
          <Stats />
          <SVGManager />
        </div>
      )}
    </div>
  )
}

export default IndexPage
