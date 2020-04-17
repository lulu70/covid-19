import React from "react"
import useFetchCountries from "../hooks/useFetchCountries"
import SEO from "../components/seo"
import SVGManager from "../components/SVGManager"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import Layout from "../components/layout"
import TimedLoader from "../components/TimedLoader"
import styled from "styled-components"
import Stats from "../components/Stats"

export const ErrorContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const P = styled.p`
  line-height: 2.5rem;
  font-size: 1rem;
`
const IndexPage = () => {
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
        <Layout>
          <Stats />
          <SVGManager />
          <P>
            This is a visual representation of the covid-19 (corona) virus
            epidemic state of recovery, globally and in each country separately.
            When a country on the map is pressed or searched for, its color is
            changing based on the number of confirmed cases and recovery cases.
            Confirmed cases are representing by the red color and recovered
            cases by the blue color. The colors are also reflected in the
            3d-model globe.
          </P>
        </Layout>
      )}
    </>
  )
}

export default IndexPage
