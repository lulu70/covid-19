import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white", fontSize: "4rem", textAlign: "center" }}>
        404
      </h1>
      <p style={{ color: "white" }}>
        The page that you are looking for doesn't exist{" "}
      </p>
      <Link style={{ color: "#00ff41" }} to="/">
        GO BACK
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
