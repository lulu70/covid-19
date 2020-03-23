import React from "react"
import { useTransition, animated } from "react-spring"
import StatsBox from "./StatsBox"

const Stats = ({ currentCountry, countryClicked, setCountryClicked }) => {
  const transitions = useTransition(countryClicked, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div
          key={key}
          style={{
            ...props,
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <StatsBox
            index={1}
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
          <StatsBox
            index={2}
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
          <StatsBox
            index={3}
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
        </animated.div>
      )
  )
}

export default Stats
