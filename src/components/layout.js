/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
  return (
    <div
      className="layout__container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main style={{ display: "flex", flex: 1 }}>{children}</main>
      <footer
        style={{
          flex: 0.1,
          color: "white",
          padding: "1rem",
          fontSize: "0.8rem",
        }}
      >
        <p>
          This is a visual representation of the covid-19 (corona) virus
          epidemic state of recovery, globally and in each country separately.{" "}
          <br />
          The color of the globe 3d model is changing based on the number of
          confirmed cases and recovery cases.
          <br /> Confirmed cases are representing by the red color and recovered
          cases by the blue color. <br /> The death cases are subtracted from
          the confirmed cases so the presentation is only regarding live cases.
        </p>
        <div style={{ fontSize: "0.7rem" }}>
          This project made possible thanks to:{" "}
          <a
            style={{ color: "#00ff41" }}
            target="blank"
            href="https://github.com/javieraviles/covidAPI"
          >
            javieraviles/covidAPI
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
