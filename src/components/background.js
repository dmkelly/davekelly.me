import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(absolutePath: { regex: "/background.jpg/" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="div"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
