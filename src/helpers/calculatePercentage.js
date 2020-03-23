import { scaleLinear } from "d3-scale"

const calculatePercentage = data => {
  const confirmed = data.cases
  const deaths = data.deaths
  const recovered = data.recovered
  const scale = scaleLinear([0, confirmed], ["0%", "100%"])
  const deathPercentage = scale(deaths)
  const recoveredPercentage = scale(recovered)
  const liveConfirmedPercentage = scale(confirmed - deaths - recovered)
  return { deathPercentage, recoveredPercentage, liveConfirmedPercentage }
}

export default calculatePercentage
