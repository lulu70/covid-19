import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"
import { useSpring, animated, config } from "react-spring"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"

function SVGManager() {
  const backgroundColor = "black"
  const countriesInitialColor = "lightgray"
  const { countryClicked, currentCountry, data } = useStateContext()
  const [pathsProps, setPathsProps] = React.useState({})
  const [
    dispatch,
    { setCountryClicked, setCurrentCountry },
  ] = useDispatchContext()
  const springProps = data.countries.reduce((pre, country) => {
    return {
      ...pre,
      [country.country]: countryClicked ? 0 : 1,
      [currentCountry.country]: 1,
      stroke: countryClicked ? "white" : "black",
    }
  }, {})
  const spring = useSpring({ ...springProps, config: config.molasses })
  //calculating props for all paths
  React.useEffect(() => {
    const initialPathsProps = data.countries.reduce((pre, country) => {
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
  }, [data, currentCountry, countryClicked])

  //click handler
  const handleClick = e => {
    dispatch(setCountryClicked(true))
    const name = e.target.getAttribute("data-name")
    const selectedCountry = data.countries.find(
      ({ country }) => country === name
    )
    const color = calculateColor(selectedCountry)
    dispatch(
      setCurrentCountry({
        color,
        ...selectedCountry,
      })
    )
  }

  return (
    <EarthSVG
      backgroundColor={backgroundColor}
      pathsProps={pathsProps}
      spring={spring}
      animated={animated}
      handleClick={handleClick}
    />
  )
}

export default SVGManager
