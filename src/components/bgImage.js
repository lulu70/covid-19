import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImg from "gatsby-background-image"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundImage = ({ fileName, children }) => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        nodes {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  `)
  const node = data.allFile.nodes.find(({ relativePath }) => {
    return relativePath === fileName
  })
  return (
    <BackgroundImg
      Tag="section"
      fluid={node.childImageSharp.fluid}
      backgroundColor={`black`}
      style={{
        height: "100vh",
      }}
    >
      {children}
    </BackgroundImg>
  )
}

export default BackgroundImage
