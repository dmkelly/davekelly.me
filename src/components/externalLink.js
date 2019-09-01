import React from 'react'

export default function ExternalLink({ to, children }) {
  return (
    <a href={to} rel="noopener noreferrer">{children}</a>
  )
}
