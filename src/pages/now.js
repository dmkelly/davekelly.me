import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layouts/center"
import SEO from "../components/seo"

class Now extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { html } = data.markdownRemark

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Now" />
        <h1>Now</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </Layout>
    )
  }
}

export default Now

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fileAbsolutePath: { regex: "/now.md/" }) {
      html
    }
  }
`
