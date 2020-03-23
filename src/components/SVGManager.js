import React from "react"
import calculateColor from "../helpers/calculateColor"
import calculatePercentage from "../helpers/calculatePercentage"
import EarthSVG from "./EarthSVG"

function SVGManager({ currentCountry, countries, handleClick }) {
  const [colors, setColors] = React.useState({})

  React.useEffect(() => {
    const initialColors = countries.reduce((pre, country) => {
      return { ...pre, [country.country]: "white" }
    }, {})
    if (currentCountry.country === "Global") {
      const colors = countries.reduce(
        (pre, country) => ({
          ...pre,
          [country.country]: calculateColor(country),
        }),
        {}
      )
      setColors(colors)
    } else {
      setColors(() => ({
        ...initialColors,
        [currentCountry.country]: calculateColor(currentCountry),
      }))
    }
  }, [currentCountry, countries])

  const percentage = calculatePercentage(currentCountry)
  return (
    <EarthSVG
      colors={colors}
      handleClick={handleClick}
      percentage={percentage}
    />
  )
}

export default SVGManager
