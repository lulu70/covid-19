import React from "react"
import StatsBox from "./StatsBox"
import { Link } from "gatsby"

const Sidebar = ({ location }) => {
  return (
    <div
      className="sidebar__container"
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <StatsBox />
      <div>
        <p
          style={{
            color: "white",
            fontSize: "0.7rem",
            margin: "1rem 0",
          }}
        >
          {location.pathname === "/"
            ? `This is a visual representation of the covid-19 (corona) virus
          epidemic state of recovery, globally and in each country separately.
          When a country on the map is pressed, its color is changing based on
          the number of confirmed cases and recovery cases. Confirmed cases are
          representing by the red color and recovered cases by the blue color.`
            : `This is a visual representation of the covid-19 (corona) virus epidemic state of recovery, globally and in each country separately.
            The color of the globe 3d model is changing based on the number of confirmed cases and recovery cases.
            Confirmed cases are representing by the red color and recovered cases by the blue color.`}
        </p>
        <Link
          to={location.pathname === "/" ? "/3d-model" : "/"}
          style={{ color: "#00ff41" }}
        >
          {location.pathname === "/" ? "Big 3d-model" : "Interactive map"}
        </Link>
      </div>
    </div>
  )
}
export default Sidebar
