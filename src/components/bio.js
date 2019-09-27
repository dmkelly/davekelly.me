import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaRss, FaFileAlt } from "react-icons/fa"
import { rhythm } from "../utils/typography"
import BioFact from "./bioFact"
import SocialIcon from "./socialIcon"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${rhythm(2.5)};
`

const Split = styled.div`
  display: flex;

  > * {
    width: 50%;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

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
            github
            linkedin
          }
        }
      }
    }
  `)

  const { author, description, location, social } = data.site.siteMetadata

  return (
    <Container>
      <Split>
        <ImageContainer>
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
        </ImageContainer>
        <div>
          <h3>{author}</h3>
          <BioFact Icon={FaMapMarkerAlt}>{location}</BioFact>
          <div
            style={{
              display: "flex",
              fontSize: rhythm(1.5),
            }}
          >
            <SocialIcon
              to={`https://github.com/${social.github}`}
              Icon={FaGithub}
              title="GitHub"
            />
            <SocialIcon
              to={`https://linkedin.com/in/${social.linkedin}`}
              Icon={FaLinkedin}
              title="LinkedIn"
            />
            <SocialIcon
              to="/kelly-resume.pdf"
              Icon={FaFileAlt}
              title="Feed"
            />
            <SocialIcon
              to="/rss.xml"
              Icon={FaRss}
              title="Feed"
            />
          </div>
        </div>
      </Split>
      <p>{description}</p>
    </Container>
  )
}

export default Bio
