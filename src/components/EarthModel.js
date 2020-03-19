import React from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const EarthModel = () => {
  const [model, setModel] = React.useState()
  React.useEffect(() => {
    new GLTFLoader().load("/earth-model/scene.gltf", setModel)
  }, [setModel])
  return model ? <primitive object={model.scene} /> : null
}

export default EarthModel
