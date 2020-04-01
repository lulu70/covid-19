import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import EarthScene from "../components/EarthScene"
import TimedLoader from "../components/TimedLoader"
import styled from "styled-components"
import { ErrorContainer } from "./index"

const Container = styled.div`
  display: flex;
  flex: 1;
`

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
          <Container>
            <Sidebar location={location} />
            <EarthScene />
          </Container>
        </Layout>
      )}
    </div>
  )
}

export default EarthModelPage
