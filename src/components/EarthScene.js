import React from "react"
import { Canvas } from "react-three-fiber"
import EarthSphere from "./EarthSphere"
import Controls from "./Controls"
import { useSpring, a, config } from "react-spring/three"
import useStateContext from "../hooks/useStateContext"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
`
const InnerContainer = styled.div`
  width: 150px;
  margin-left: auto;
`
const EarthScene = () => {
  const { currentCountry } = useStateContext()
  const { color } = currentCountry
  const spring = useSpring({
    color,
    intensity: 2,
    from: {
      intensity: 0,
    },
    config: config.molasses,
  })

  return (
    <Container>
      <InnerContainer>
        <Canvas camera={{ position: [0, 0, 9] }}>
          <EarthSphere />
          <Controls />
          <a.ambientLight {...spring} />
        </Canvas>
      </InnerContainer>
    </Container>
  )
}

export default EarthScene
