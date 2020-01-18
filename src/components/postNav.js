import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  list-style: none;
  padding: 0;
`

function PostNav({ basePath, next, previous }) {
  return (
    <nav>
      <List>
        {previous ? (
          <li>
            <Link to={`${basePath}${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </li>
        ) : (
          <li />
        )}
        {next && (
          <li>
            <Link to={`${basePath}${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </List>
    </nav>
  )
}

export default PostNav
