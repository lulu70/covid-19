import React from "react"
import { Canvas } from "react-three-fiber"
import EarthSphere from "./EarthSphere"
import Controls from "./Controls"
import { useSpring, a, config } from "react-spring/three"
const EarthScene = ({ color }) => {
  const spring = useSpring({
    color,
    intensity: 2,
    from: {
      intensity: 0,
    },
    config: config.molasses,
  })

  return (
    <Canvas camera={{ position: [0, 0, 11] }}>
      <EarthSphere />
      <Controls />
      <a.ambientLight {...spring} />
    </Canvas>
  )
}

export default EarthScene
