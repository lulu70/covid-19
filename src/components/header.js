import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle }) => (
  <header>
    <Link
      to="/"
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        textDecoration: "none",
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center", color: "white" }}>
        {siteTitle}
      </h1>
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
