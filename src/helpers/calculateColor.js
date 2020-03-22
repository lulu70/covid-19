import { scaleLinear } from "d3-scale"

const calculateColor = data => {
  const confirmed = data.cases
  const deaths = data.deaths
  const recovered = data.recovered
  const colorScale = scaleLinear([0, confirmed - deaths], ["red", "blue"])
  return colorScale(recovered)
}

export default calculateColor
