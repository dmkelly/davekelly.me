import React from 'react'
import ExternalLink from './externalLink'

export default function SocialIcon({ Icon, to }) {
  return (
    <div>
      <ExternalLink to={to}>
        <Icon />
      </ExternalLink>
    </div>
  )
}
