import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"
import { useSpring, animated, config } from "react-spring"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"

function SVGManager() {
  const backgroundColor = "#212121"
  const countriesInitialColor = "lightgray"
  const { countryClicked, currentCountry, data } = useStateContext()
  const [pathsProps, setPathsProps] = React.useState({})
  const [
    dispatch,
    { setCountryClicked, setCurrentCountry },
  ] = useDispatchContext()
  const springProps = data.countries.reduce((pre, country) => {
    const iso2 = country.countryInfo.iso2
    const currentIso =
      currentCountry && currentCountry.countryInfo
        ? currentCountry.countryInfo.iso2
        : null
    return {
      ...pre,
      [iso2]: countryClicked ? 0 : 1,
      [currentIso]: 1,
      stroke: countryClicked ? "white" : "black",
    }
  }, {})
  const spring = useSpring({ ...springProps, config: config.molasses })
  //calculating props for all paths
  React.useEffect(() => {
    const initialPathsProps = data.countries.reduce((pre, country) => {
      return {
        ...pre,
        [country.countryInfo.iso2]: {
          fill: countriesInitialColor,
        },
      }
    }, {})
    if (!countryClicked) {
      setPathsProps(initialPathsProps)
    } else {
      setPathsProps(() => ({
        ...initialPathsProps,
        [currentCountry.countryInfo.iso2]: {
          fill: calculateColor(currentCountry),
        },
      }))
    }
  }, [data, currentCountry, countryClicked])

  //adds mouse click event
  const svgRef = React.useRef()
  React.useEffect(() => {
    const ref = svgRef.current
    const handleMouseDown = e => {
      if (e.target.tagName !== "path") {
        dispatch(setCountryClicked(false))
        dispatch(
          setCurrentCountry({
            ...data.all,
            country: "Global",
            active: data.all.cases - data.all.deaths - data.all.recovered,
          })
        )
      }
    }
    ref.addEventListener("mousedown", handleMouseDown)
    return () => {
      ref.removeEventListener("mousedown", handleMouseDown)
    }
  }, [dispatch, setCountryClicked, countryClicked, data, setCurrentCountry])

  //click handler
  const handleClick = e => {
    const name = e.target.getAttribute("data-id")
    const selectedCountry = data.countries.find(
      ({ countryInfo }) => countryInfo.iso2 === name
    )
    const color = calculateColor(selectedCountry)
    dispatch(
      setCurrentCountry({
        color,
        ...selectedCountry,
      })
    )
    dispatch(setCountryClicked(true))
  }

  return (
    <EarthSVG
      backgroundColor={backgroundColor}
      pathsProps={pathsProps}
      spring={spring}
      animated={animated}
      handleClick={handleClick}
      svgRef={svgRef}
    />
  )
}

export default SVGManager
