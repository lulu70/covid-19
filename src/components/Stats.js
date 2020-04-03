import React from "react"
import StatsBox from "./StatsBox"
import styled from "styled-components"
import EarthScene from "./EarthScene"

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const Stats = () => {
  return (
    <Container>
      <StatsBox />
      <EarthScene />
    </Container>
  )
}

export default Stats
