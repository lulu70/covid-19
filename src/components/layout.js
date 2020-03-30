import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import useDispatchContext from "../hooks/useDispatchContext"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [dispatch, { setCountryClicked }] = useDispatchContext()
  React.useEffect(() => {
    dispatch(setCountryClicked(false))
  }, [dispatch, setCountryClicked])
  return (
    <div
      className="layout__container"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        padding: " 0 1rem",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ display: "flex", flex: 1 }}>{children}</main>
      <footer
        style={{
          color: "white",
          fontSize: "0.7rem",
        }}
      >
        This project made possible thanks to:{" "}
        <a
          style={{ color: "#00ff41" }}
          target="blank"
          href="https://github.com/javieraviles/covidAPI"
        >
          javieraviles/covidAPI
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
