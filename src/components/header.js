import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Search from "./Search"
import EarthScene from "./EarthScene"
const Header = ({ siteTitle, location }) => (
  <header style={{ display: "flex", alignItems: "center" }}>
    <EarthScene fromHeader location={location} />
    <Link
      to="/"
      style={{
        margin: `0 1rem`,
        textDecoration: "none",
        flex: 8,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", color: "white" }}>
        {siteTitle}
      </h1>
    </Link>
    <Search />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
