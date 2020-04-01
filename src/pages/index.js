import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import SVGManager from "../components/SVGManager"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import TimedLoader from "../components/TimedLoader"
import styled from "styled-components"

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

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
        <ErrorContainer>
          <h1>
            An error loading the data, <br />
            Try refreshing the page{" "}
          </h1>
          <p>{error && error.message && error.message}</p>
        </ErrorContainer>
      )}
      {dataStatus === "LOADING" && <TimedLoader />}
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
