import React from "react"
import StatsBox from "./StatsBox"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
`
const P = styled.p`
  color: white;
  font-size: 0.7rem;
  margin: 1rem 0;
`
const StyledLink = styled(Link)`
  color: #00ff41;
`

const Sidebar = ({ location }) => {
  return (
    <Container className="sidebar__container">
      <StatsBox />
      <div>
        <P>
          {location.pathname === "/"
            ? `This is a visual representation of the covid-19 (corona) virus
          epidemic state of recovery, globally and in each country separately.
          When a country on the map is pressed, its color is changing based on
          the number of confirmed cases and recovery cases. Confirmed cases are
          representing by the red color and recovered cases by the blue color.`
            : `This is a visual representation of the covid-19 (corona) virus epidemic state of recovery, globally and in each country separately.
            The color of the globe 3d model is changing based on the number of confirmed cases and recovery cases.
            Confirmed cases are representing by the red color and recovered cases by the blue color.`}
        </P>
        <StyledLink to={location.pathname === "/" ? "/3d-model" : "/"}>
          {location.pathname === "/" ? "Big 3d-model" : "Interactive map"}
        </StyledLink>
      </div>
    </Container>
  )
}
export default Sidebar
