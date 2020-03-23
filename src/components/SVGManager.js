import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"

function SVGManager({ currentCountry, countries, handleClick }) {
  const backgroundColor = "lightblue"
  const countriesInitialColor = "white"
  const [pathsProps, setPathsProps] = React.useState({})

  //calculating props for all paths
  React.useEffect(() => {
    const initialPathsProps = countries.reduce((pre, country) => {
      return {
        ...pre,
        [country.country]: {
          fill: countriesInitialColor,
        },
      }
    }, {})
    if (currentCountry.country === "Global") {
      // const props = countries.reduce(
      //   (pre, country) => ({
      //     ...pre,
      //     [country.country]: {
      //       fill: calculateColor(country),
      //     },
      //   }),
      //   {}
      // )
      setPathsProps(initialPathsProps)
    } else {
      setPathsProps(() => ({
        ...initialPathsProps,
        [currentCountry.country]: {
          fill: calculateColor(currentCountry),
        },
      }))
    }
  }, [countries, currentCountry])

  return (
    <EarthSVG
      backgroundColor={backgroundColor}
      pathsProps={pathsProps}
      handleClick={handleClick}
    />
  )
}

export default SVGManager
