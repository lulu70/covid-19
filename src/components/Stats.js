import React from "react"
import OutsideClickWrapper from "./OutsideClickWrapper"
import calculateColor from "../helpers/calculateColor"
import { useTransition, animated } from "react-spring"
import calculatePercentage from "../helpers/calculatePercentage"
import Bar from "./Bar"

const StatsBox = ({ currentCountry, setCountryClicked }) => {
  const {
    deathPercentage,
    recoveredPercentage,
    liveConfirmedPercentage,
  } = calculatePercentage(currentCountry)
  return (
    <OutsideClickWrapper
      onOutsideClick={() => {
        setCountryClicked(false)
      }}
      style={{
        backgroundColor: "black",
        color: "white",
        width: "20%",
        padding: "1rem",
        borderRadius: "15%",
      }}
    >
      <h3
        style={{
          fontWeight: "normal",
          textAlign: "center",
          marginBottom: "0.5rem",
        }}
      >
        {currentCountry.country}
      </h3>
      <ul style={{ listStyleType: "none", margin: 0, fontSize: "0.8rem" }}>
        <li style={{ color: "red" }}>
          Confirmed and alive:{" "}
          {currentCountry.cases -
            currentCountry.recovered -
            currentCountry.deaths}
        </li>
        <Bar color="red" width={liveConfirmedPercentage} />
        <li style={{ color: "#4badff" }}>
          Recovered: {currentCountry.recovered}
        </li>
        <Bar color="blue" width={recoveredPercentage} />
        <li>Deaths: {currentCountry.deaths}</li>
        <Bar color="white" width={deathPercentage} />
      </ul>
    </OutsideClickWrapper>
  )
}

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
        setTimeout(() => {
          setCurrentCountry({
            color: calculateColor(data.all),
            country: "Global",
            ...data.all,
          })
        }, [200])
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
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <StatsBox
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
          <StatsBox
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
          <StatsBox
            currentCountry={currentCountry}
            setCountryClicked={setCountryClicked}
          />
        </animated.div>
      )
  )
}

export default Stats
