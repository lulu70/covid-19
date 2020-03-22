import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"

function SVGManager({ currentCountry, countries, ...props }) {
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
        [currentCountry.country]: currentCountry.color,
      }))
    }
  }, [currentCountry, countries])

  return <EarthSVG colors={colors} />
}

export default SVGManager
