import "../style.css"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/leftEdge"
import SEO from "../components/seo"
import Bio from "../components/bio"
import PostsList from "../components/postsList"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const { blogPrefix, title: siteTitle } = data.site.siteMetadata
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={siteTitle} />
        <Bio />
        <PostsList basePath={`/${blogPrefix}`} posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        blogPrefix
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
