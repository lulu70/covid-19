import React from "react"
import OutsideClickWrapper from "./OutsideClickWrapper"
import calculateColor from "../helpers/calculateColor"
import { useTransition, animated } from "react-spring"

const Stats = ({
  data,
  currentCountry,
  setCurrentCountry,
  countryClicked,
  setCountryClicked,
}) => {
  const transitions = useTransition(countryClicked, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onDestroyed: () => {
      if (!countryClicked)
        setCurrentCountry({
          color: calculateColor(data.all),
          country: "Global",
          ...data.all,
        })
    },
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
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <OutsideClickWrapper
            onOutsideClick={() => {
              setCountryClicked(false)
            }}
            style={{
              backgroundColor: "black",
              width: "20%",
            }}
          >
            <h3 style={{ fontWeight: "normal", textAlign: "center" }}>
              {currentCountry.country}
            </h3>
            <ul>
              <li style={{ color: "red" }}>
                Confirmed: {currentCountry.cases}
              </li>
              <li style={{ color: "#4badff" }}>
                Recovered: {currentCountry.recovered}
              </li>
              <li>Deaths: {currentCountry.deaths}</li>
            </ul>
          </OutsideClickWrapper>
        </animated.div>
      )
  )
}

export default Stats
