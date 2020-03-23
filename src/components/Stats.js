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
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              flex: 1,
              display: "flex",
              justifyContent: "space-around",
              padding: "0.2rem",
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
          </div>
        </animated.div>
      )
  )
}

export default Stats
