import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import useDispatchContext from "../hooks/useDispatchContext"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 0 1rem;
`
const Main = styled.main`
  display: flex;
  flex: 1;
`
const Footer = styled.footer`
  color: white;
  font-size: 0.7rem;
`
const A = styled.a`
  color: #00ff41;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [dispatch, { setCountryClicked }] = useDispatchContext()
  React.useEffect(() => {
    dispatch(setCountryClicked(false))
  }, [dispatch, setCountryClicked])
  return (
    <Container className="layout__container">
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Main>{children}</Main>
      <Footer>
        This project made possible thanks to:{" "}
        <A target="blank" href="https://github.com/NovelCOVID/API">
          NovelCOVID/API
        </A>
      </Footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
