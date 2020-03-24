import { scaleLinear } from "d3-scale"

const calculatePercentage = data => {
  const confirmed = data.cases
  const deaths = data.deaths
  const recovered = data.recovered
  const active = data.active
  const scale = scaleLinear([0, confirmed], ["0%", "100%"])
  const deathPercentage = scale(deaths)
  const recoveredPercentage = scale(recovered)
  const activePercentage = scale(active)
  return { deathPercentage, recoveredPercentage, activePercentage }
}

export default calculatePercentage
