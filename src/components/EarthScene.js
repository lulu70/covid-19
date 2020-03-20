import React from "react"
import { Canvas } from "react-three-fiber"
import EarthModel from "./EarthModel"
import Controls from "./Controls"

const EarthScene = ({ color }) => {
  return (
    <Canvas camera={{ position: [0, 5, 12] }}>
      <EarthModel />
      <Controls />
      <ambientLight intensity={2} />
      <spotLight
        position={[20, 20, 20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[-20, 20, -20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[20, 20, -20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[-20, 20, 20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[20, -20, 20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[-20, -20, -20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[20, -20, -20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
      <spotLight
        position={[-20, -20, 20]}
        color={color}
        penumbra={1}
        intensity={3}
      />
    </Canvas>
  )
}

export default EarthScene