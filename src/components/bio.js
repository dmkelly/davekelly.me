/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa"
import { rhythm } from "../utils/typography"
import BioFact from './bioFact'
import SocialIcon from './socialIcon'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          location
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, description, location, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: rhythm(1 / 2),
          minWidth: 200,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <h3>{author}</h3>
        <p>{description}</p>
        <BioFact Icon={FaMapMarkerAlt}>{location}</BioFact>
        <div
          style={{
            display: 'flex'
          }}
        >
          <SocialIcon to={`https://github.com/${social.github}`} Icon={FaGithub} />
          <SocialIcon to={`https://linkedin.com/in/${social.linkedin}`} Icon={FaLinkedin} />
        </div>
      </div>
    </div>
  )
}

export default Bio
