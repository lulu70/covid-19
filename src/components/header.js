import React from "react"
import { Link } from "gatsby"
import Search from "./Search"
import EarthScene from "./EarthScene"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
`
const StyledLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  flex: 8;
`
const H1 = styled.h1`
  margin: 0;
  text-align: center;
  color: white;
`
const Header = ({ siteTitle, location }) => (
  <StyledHeader>
    <EarthScene fromHeader location={location} />
    <StyledLink to="/">
      <H1>{siteTitle}</H1>
    </StyledLink>
    <Search />
  </StyledHeader>
)

export default Header
