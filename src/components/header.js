import React from "react"
import Search from "./Search"
import EarthScene from "./EarthScene"
import styled from "styled-components"
import devices from "../helpers/devices"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 6rem;
  margin: 1rem;
  @media ${devices.laptopL} {
    flex-direction: row;
    margin: 0;
  }
`
const TitleContainer = styled.div`
  margin: 0 1rem;
  text-decoration: none;
  flex: 8;
  order: 2;
  text-align: center;
  font-weight: 200;
`
const Header = ({ siteTitle, location, subTitle }) => (
  <StyledHeader>
    <TitleContainer>
      <h1>{siteTitle}</h1>
      <h3>{subTitle}</h3>
    </TitleContainer>
    <Search />
    <EarthScene fromHeader location={location} />
  </StyledHeader>
)

export default Header
