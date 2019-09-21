import React from "react"

export default function ExternalLink({ to, children, title, style }) {
  return (
    <a style={style} href={to} title={title} rel="noopener noreferrer">
      {children}
    </a>
  )
}
