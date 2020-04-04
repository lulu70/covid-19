import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import useDispatchContext from "../hooks/useDispatchContext"
import styled from "styled-components"
import devices from "../helpers/devices"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  @media ${devices.laptop} {
    width: 80%;
  }
  @media ${devices.desktop} {
    width: 60%;
  }
`
const Footer = styled.footer`
  color: white;
  font-size: 0.7rem;
`
const A = styled.a`
  color: #00ff41;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  const [dispatch, { setCountryClicked }] = useDispatchContext()
  React.useEffect(() => {
    dispatch(setCountryClicked(false))
  }, [dispatch, setCountryClicked])
  return (
    <Container>
      <Header
        siteTitle={data.site.siteMetadata.title}
        subTitle={data.site.siteMetadata.subTitle}
      />
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
