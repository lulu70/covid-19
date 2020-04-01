import React from "react"
import { Canvas } from "react-three-fiber"
import EarthSphere from "./EarthSphere"
import Controls from "./Controls"
import { useSpring, a, config } from "react-spring/three"
import useStateContext from "../hooks/useStateContext"
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
    <Canvas
      camera={{ position: [0, 0, fromHeader ? 18 : 12] }}
      style={{
        background: fromHeader ? "black" : "#232222",
        flex: fromHeader ? 1 : 5,
      }}
    >
      {fromHeader && location.pathname === "/3d-model" ? null : (
        <>
          <EarthSphere />
          <Controls />
          <a.ambientLight {...spring} />
        </>
      )}
    </Canvas>
  )
}

export default EarthScene
