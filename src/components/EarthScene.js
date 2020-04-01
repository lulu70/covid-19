import React from "react"
import { Canvas } from "react-three-fiber"
import EarthSphere from "./EarthSphere"
import Controls from "./Controls"
import { useSpring, a, config } from "react-spring/three"
import useStateContext from "../hooks/useStateContext"
import styled from "styled-components"

const StyledCanvas = styled(Canvas)`
  background-color: ${({ fromHeader }) => (fromHeader ? "black" : "#232222")};
  flex: ${({ fromHeader }) => (fromHeader ? 1 : 5)};
`

const EarthScene = ({ fromHeader, location }) => {
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
    <StyledCanvas
      camera={{ position: [0, 0, fromHeader ? 18 : 12] }}
      fromHeader={fromHeader}
    >
      {fromHeader && location.pathname === "/3d-model" ? null : (
        <>
          <EarthSphere />
          <Controls />
          <a.ambientLight {...spring} />
        </>
      )}
    </StyledCanvas>
  )
}

export default EarthScene
