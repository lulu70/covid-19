import React from "react"
import Bar from "./Bar"
import calculatePercentage from "../helpers/calculatePercentage"
import useStateContext from "../hooks/useStateContext"
import styled from "styled-components"
import normalizeName from "../helpers/normalizeName"
const Container = styled.div`
  flex: 1;
`
const H3 = styled.h3`
  margin-bottom: lineHeight;
`
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  font-size: 1rem;
`
const Li = styled.li`
  margin: 0;
  line-height: 1rem;
  color: ${({ color }) => color};
`
const StatsBox = () => {
  const { currentCountry } = useStateContext()
  const {
    deathPercentage,
    recoveredPercentage,
    activePercentage,
  } = calculatePercentage(currentCountry)

  return (
    <Container>
      <H3 id="statsBox__h3">{normalizeName(currentCountry.country)}</H3>
      <Ul>
        <Li color="red">Active: {currentCountry.active}</Li>
        <Bar color="red" width={activePercentage} />
        <Li color="#4badff">Recovered: {currentCountry.recovered}</Li>
        <Bar color="blue" width={recoveredPercentage} />
        <Li color="grey">Deaths: {currentCountry.deaths}</Li>
        <Bar color="grey" width={deathPercentage} />
      </Ul>
    </Container>
  )
}

export default StatsBox
