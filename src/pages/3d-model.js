import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
// import Loader from "react-loader"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import Layout from "../components/layout"
// import { Link } from "gatsby"
import Sidebar from "../components/Sidebar"
import EarthScene from "../components/EarthScene"
import TimedLoader from "../components/TimedLoader"
const EarthModelPage = ({ location }) => {
  useFetchCountries()
  const { dataStatus, error } = useStateContext()
  const [dispatch, { setDataStatus }] = useDispatchContext()
  React.useEffect(() => {
    return () => {
      dispatch(setDataStatus("INITIAL"))
    }
  }, [dispatch, setDataStatus])
  return (
    <div>
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
      {dataStatus === "LOADING" && <TimedLoader />}
      {dataStatus === "SUCCESS" && (
        <Layout
          location={location}
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        >
          <div
            className="index__innerContainer"
            style={{
              display: "flex",
              color: "white",
              flex: 1,
            }}
          >
            <Sidebar location={location} />
            <EarthScene />
          </div>
        </Layout>
      )}
    </div>
  )
}

export default EarthModelPage
