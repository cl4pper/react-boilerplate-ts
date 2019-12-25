import React from 'react'

// STYLE
import './CommitItem.scss'

function CommitItem (props) {

  const { date, commit } = props

  return (
    <p className="CommitItem">
      <span className="CommitItem__date">{date}</span>
      {commit}
    </p>
  )
}

export {
  CommitItem
}
