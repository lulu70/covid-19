import React from "react"
import { useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { extend } from "react-three-fiber"

extend({ OrbitControls })

const Controls = () => {
  const controlRef = React.useRef()
  const { camera, gl } = useThree()
  useFrame(() => {
    controlRef.current.update()
  })
  return (
    <orbitControls args={[camera, gl.domElement]} ref={controlRef} autoRotate />
  )
}

export default Controls
