import React from "react"
import { rhythm } from "../utils/typography"

export default function BioFact({ Icon, children }) {
  return (
    <div
      style={{
        display: `flex`,
        alignItems: "center",
        marginBottom: rhythm(1 / 2),
      }}
    >
      <div
        style={{
          marginRight: rhythm(1 / 4),
        }}
      >
        <Icon />
      </div>
      <div>{children}</div>
    </div>
  )
}
