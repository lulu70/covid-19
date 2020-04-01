import React from "react"
import Bar from "./Bar"
import calculatePercentage from "../helpers/calculatePercentage"
import useStateContext from "../hooks/useStateContext"
import styled from "styled-components"

const H3 = styled.h3`
  font-weight: normal;
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
  const normalizeName = word => {
    if (word.includes(",")) {
      const arr = word.split("")
      const slicedArr = arr.slice(0, arr.indexOf(","))
      return slicedArr.join("")
    } else return word
  }
  const {
    deathPercentage,
    recoveredPercentage,
    activePercentage,
  } = calculatePercentage(currentCountry)

  return (
    <div>
      <H3>{normalizeName(currentCountry.country)}</H3>
      <Ul>
        <Li color="red">Active: {currentCountry.active}</Li>
        <Bar color="red" width={activePercentage} />
        <Li color="#4badff">Recovered: {currentCountry.recovered}</Li>
        <Bar color="blue" width={recoveredPercentage} />
        <Li color="grey">Deaths: {currentCountry.deaths}</Li>
        <Bar color="grey" width={deathPercentage} />
      </Ul>
    </div>
  )
}

export default StatsBox
