import React from 'react'

// STYLE
import './PageTitle.scss'

function PageTitle (props) {
  const { children } = props
  return (
    <h1 className="PageTitle">
      {children}
    </h1>
  )
}

export {
  PageTitle
}
