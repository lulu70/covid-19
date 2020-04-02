import React from "react"
import { Canvas } from "react-three-fiber"
import EarthSphere from "./EarthSphere"
import Controls from "./Controls"
import { useSpring, a, config } from "react-spring/three"
import useStateContext from "../hooks/useStateContext"
import styled from "styled-components"
import devices from "../helpers/devices"

const MyCanvas = ({ fromHeader, ...props }) => <Canvas {...props} />

const StyledCanvas = styled(MyCanvas)`
  background-color: ${({ fromHeader }) => (fromHeader ? "black" : "#232222")};
  flex: ${({ fromHeader }) => (fromHeader ? 1 : 5)};
  min-height: ${({ fromHeader }) => (fromHeader ? "0px" : "300px")};
  max-height: ${({ fromHeader }) => (fromHeader ? "0px" : "500px")};
  @media ${devices.laptopL} {
    max-height: 500px;
    order: 1;
  }
`
const Placeholder = styled.div`
  flex: 1;
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

  return fromHeader && location.pathname === "/3d-model" ? (
    <Placeholder />
  ) : (
    <StyledCanvas
      camera={{ position: [0, 0, fromHeader ? 18 : 12] }}
      fromHeader={fromHeader}
    >
      <EarthSphere />
      <Controls />
      <a.ambientLight {...spring} />
    </StyledCanvas>
  )
}

export default EarthScene
