import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
const H1 = styled.h1`
  font-size: 4rem;
`
const StyledLink = styled(Link)`
  color: #00ff41;
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container>
      <H1>404</H1>
      <p>The page that you are looking for doesn't exist </p>
      <StyledLink to="/">GO BACK</StyledLink>
    </Container>
  </>
)

export default NotFoundPage
