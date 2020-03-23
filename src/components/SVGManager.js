import React from "react"
import calculateColor from "../helpers/calculateColor"
import calculatePercentage from "../helpers/calculatePercentage"
import EarthSVG from "./EarthSVG"

function SVGManager({ currentCountry, countries, handleClick }) {
  const backgroundColor = "lightblue"
  const [pathsProps, setPathsProps] = React.useState({})

  //calculating props for all paths
  React.useEffect(() => {
    const initialPathsProps = countries.reduce((pre, country) => {
      return {
        ...pre,
        [country.country]: {
          fill: backgroundColor,
        },
      }
    }, {})
    if (currentCountry.country === "Global") {
      const props = countries.reduce(
        (pre, country) => ({
          ...pre,
          [country.country]: {
            fill: calculateColor(country),
          },
        }),
        {}
      )
      setPathsProps(props)
    } else {
      setPathsProps(() => ({
        ...initialPathsProps,
        [currentCountry.country]: {
          fill: calculateColor(currentCountry),
        },
      }))
    }
  }, [countries, currentCountry])

  const percentage = calculatePercentage(currentCountry)
  return (
    <EarthSVG
      backgroundColor={backgroundColor}
      pathsProps={pathsProps}
      handleClick={handleClick}
      percentage={percentage}
    />
  )
}

export default SVGManager
