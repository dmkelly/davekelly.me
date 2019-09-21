import React from "react"
import { rhythm } from "../utils/typography"
import ExternalLink from "./externalLink"

export default function SocialIcon({ Icon, to, title }) {
  return (
    <div
      style={{
        marginRight: rhythm(1 / 4),
      }}
    >
      <ExternalLink to={to} title={title}>
        <Icon />
      </ExternalLink>
    </div>
  )
}
