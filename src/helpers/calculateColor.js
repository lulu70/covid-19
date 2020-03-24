import { scaleLinear } from "d3-scale"

const calculateColor = data => {
  const confirmed = data.cases
  const recovered = data.recovered
  const colorScale = scaleLinear([0, confirmed], ["red", "blue"])
  return colorScale(recovered)
}

export default calculateColor
