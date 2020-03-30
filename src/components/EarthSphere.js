import React from "react"
import image from "../images/earth.jpg"
import * as THREE from "three"

const EarthSphere = () => {
  const texture = React.useMemo(() => new THREE.TextureLoader().load(image), [])
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[5, 100, 100]} />
      <meshPhongMaterial attach="material" map={texture} />
    </mesh>
  )
}
export default EarthSphere
