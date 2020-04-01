import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
// import Loader from "react-loader"
import SVGManager from "../components/SVGManager"
import "../components/layout.css"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"

const IndexPage = ({ location }) => {
  useFetchCountries()
  const { dataStatus, error } = useStateContext()
  const [dispatch, { setDataStatus }] = useDispatchContext()
  React.useEffect(() => {
    return () => {
      dispatch(setDataStatus("INITIAL"))
    }
  }, [dispatch, setDataStatus])

  return (
    <>
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
        <Layout location={location}>
          <Sidebar location={location} />
          <SVGManager />
        </Layout>
      )}
    </>
  )
}

export default IndexPage
