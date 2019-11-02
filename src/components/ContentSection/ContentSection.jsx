import React from 'react'
import classNames from 'classnames'

// STYLE
import './ContentSection.scss'

function ContentSection (props) {
  const { children, light, left, right, height } = props
  return (
    <section className={classNames('ContentSection', {
      'ContentSection--dark': !light,
      'ContentSection--light': light,
      'ContentSection--center': !left && !right,
      'ContentSection--right': right,
      'ContentSection--left': left
    })}
    style={{height: `${height}`}}>
      {children}
    </section>
  )
}

export {
  ContentSection
}
