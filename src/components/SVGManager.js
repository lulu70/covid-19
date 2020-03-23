import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"
import { useSpring, animated, config } from "react-spring"

function SVGManager({
  currentCountry,
  countries,
  handleClick,
  countryClicked,
}) {
  const backgroundColor = "black"
  const countriesInitialColor = "white"
  const [pathsProps, setPathsProps] = React.useState({})

  const springProps = countries.reduce((pre, country) => {
    return {
      ...pre,
      [country.country]: countryClicked ? 0 : 1,
      [currentCountry.country]: 1,
      stroke: countryClicked ? "white" : "black",
    }
  }, {})
  const spring = useSpring(springProps)
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
    if (!countryClicked) {
      setPathsProps(initialPathsProps)
    } else {
      setPathsProps(() => ({
        ...initialPathsProps,
        [currentCountry.country]: {
          fill: calculateColor(currentCountry),
        },
      }))
    }
  }, [countries, currentCountry, countryClicked])

  return (
    <EarthSVG
      backgroundColor={backgroundColor}
      pathsProps={pathsProps}
      handleClick={handleClick}
      spring={spring}
      animated={animated}
    />
  )
}

export default SVGManager
