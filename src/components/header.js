import React from "react"
import styled from "styled-components"
import Search from "./Search"
import devices from "../helpers/devices"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
  width: 100%;
  width: 95%;
  @media ${devices.laptop} {
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
  @media ${devices.desktop} {
    width: 60%;
  }
`
const H1 = styled.h1`
  font-weight: lighter;
  font-size: 6rem;
  @media ${devices.laptop} {
    font-size: 3rem;
  }
`
const H2 = styled.h2`
  font-weight: lighter;
  font-size: 3rem;
  @media ${devices.laptop} {
    font-size: 1.5rem;
  }
`

const Header = ({ siteTitle, subTitle }) => (
  <StyledHeader>
    <div>
      <H1>{siteTitle}</H1>
      <H2>{subTitle}</H2>
    </div>
    <Search />
  </StyledHeader>
)

export default Header
