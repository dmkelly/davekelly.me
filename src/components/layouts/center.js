import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import Background from "../backgrounds/cityStorm"
import Footer from "../footer"

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Body = styled.div`
  width: 100%;
  max-width: 46rem;
  min-height: 100vh;
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  background-color: rgba(255, 255, 255, 0.8);
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = null

    if (location.pathname !== rootPath) {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }

    return (
      <Background>
        <Container>
          <Body>
            <header>{header}</header>
            <main>{children}</main>
            <Footer />
          </Body>
        </Container>
      </Background>
    )
  }
}

export default Layout
