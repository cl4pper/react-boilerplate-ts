import React from 'react'
import classNames from 'classnames'

// STYLE
import './PageTitle.scss'

function PageTitle (props) {
  const { children, light } = props

  return (
    <h1 className={classNames('PageTitle', {
      'PageTitle--dark': !light,
      'PageTitle--light': light
    })}>
      {children}
    </h1>
  )
}

export {
  PageTitle
}
