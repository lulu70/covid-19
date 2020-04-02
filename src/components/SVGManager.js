import React from "react"
import calculateColor from "../helpers/calculateColor"
import EarthSVG from "./EarthSVG"
import { useSpring, animated, config } from "react-spring"
import useStateContext from "../hooks/useStateContext"
import useDispatchContext from "../hooks/useDispatchContext"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import styled from "styled-components"
import devices from "../helpers/devices"
import useComponentSize from "@rehooks/component-size"

const Container = styled.div`
  flex: 5;
  @media ${devices.laptopL} {
    order: 2;
  }
`

const SVGManager = () => {
  const { countryClicked, currentCountry, data } = useStateContext()
  const [
    dispatch,
    { setCountryClicked, setCurrentCountry },
  ] = useDispatchContext()

  const springProps = data.countries.reduce(
    (pre, country) => {
      const iso2 = country.countryInfo.iso2
      const currentIso =
        currentCountry && currentCountry.countryInfo
          ? currentCountry.countryInfo.iso2
          : null
      return {
        ...pre,
        [iso2]: iso2 === currentIso ? 1 : 0,
      }
    },
    {
      config: config.molasses,
      from: {
        opacity: 0,
      },
      opacity: 1,
    }
  )
  const spring = useSpring(springProps)

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
            countryInfo: {
              iso2: "global",
            },
            active: data.all.cases - data.all.deaths - data.all.recovered,
            color: calculateColor(data.all),
          })
        )
      }
    }
    ref.addEventListener("mousedown", handleMouseDown)
    return () => {
      ref.removeEventListener("mousedown", handleMouseDown)
    }
  }, [dispatch, setCountryClicked, countryClicked, data, setCurrentCountry])

  //get container width
  const containerRef = React.useRef(null)
  const { width: containerWidth } = useComponentSize(containerRef)
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

  const backgroundColor = "black"

  const pathsProps = data.countries.reduce((pre, country) => {
    return {
      ...pre,
      [country.countryInfo.iso2]: {
        fill: calculateColor(country),
        cursor: "pointer",
        fillOpacity: spring[country.countryInfo.iso2],
      },
    }
  }, {})
  const svgProps = {
    opacity: spring.opacity,
  }
  return (
    <Container className="svgManager__container" ref={containerRef}>
      <TransformWrapper
        options={{
          maxScale: 25,
        }}
      >
        <TransformComponent>
          <EarthSVG
            backgroundColor={backgroundColor}
            pathsProps={pathsProps}
            svgProps={svgProps}
            animated={animated}
            handleClick={handleClick}
            svgRef={svgRef}
            width={containerWidth}
          />
        </TransformComponent>
      </TransformWrapper>
    </Container>
  )
}

export default SVGManager
