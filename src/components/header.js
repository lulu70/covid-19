import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`
const H1 = styled.h1`
  font-weight: lighter;
  font-size: 6rem;
`
const H2 = styled.h2`
  font-weight: lighter;
  font-size: 3rem;
`

const Header = ({ siteTitle, subTitle }) => (
  <StyledHeader>
    <H1>{siteTitle}</H1>
    <H2>{subTitle}</H2>
  </StyledHeader>
)

export default Header
