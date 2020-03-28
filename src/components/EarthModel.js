import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Dom } from "react-three-fiber"

const EarthModel = () => {
  const [model, setModel] = React.useState()
  React.useEffect(() => {
    new GLTFLoader().load("/earth/scene.gltf", setModel)
  }, [setModel])
  return model ? (
    <primitive object={model.scene} />
  ) : (
    <Dom position={[-3, 2, 0]}>
      {/* <h1 style={{ color: "white" }}>Loading...</h1> */}
    </Dom>
  )
}

export default EarthModel
