import React from "react"
import Layout from "../components/layout"
import useFetch from "../hooks/useFeatch"
import SEO from "../components/seo"
import { Canvas, extend, useThree, useFrame } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { scaleLinear } from "d3-scale"
extend({ OrbitControls })

// const Box = () => {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
//       <meshPhysicalMaterial attach="material" color="grey" />
//     </mesh>
//   )
// }
const Earth = () => {
  const [model, setModel] = React.useState()
  React.useEffect(() => {
    new GLTFLoader().load("/earth-model/scene.gltf", setModel)
  }, [setModel])
  return model ? <primitive object={model.scene} /> : null
}

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
const IndexPage = () => {
  const { data, loading, error } = useFetch("https://covid19.mathdro.id/api")
  const [color, setColor] = React.useState("")
  React.useEffect(() => {
    if (!error && !loading) {
      const confirmed = data.confirmed.value
      const deaths = data.deaths.value
      const recovered = data.recovered.value
      const colorScale = scaleLinear([0, confirmed - deaths], ["red", "blue"])
      const recoveredColor = colorScale(recovered)
      setColor(recoveredColor)
    }
  }, [error, loading, data])
  return (
    <Layout>
      <SEO title="Home" />
      {error && (
        <>
          <h1>Error</h1>
          <p>{error.message}</p>
        </>
      )}
      {loading && <h1>Loading...</h1>}
      <Canvas camera={{ position: [0, 5, 12] }}>
        <Earth />
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
    </Layout>
  )
}

export default IndexPage
