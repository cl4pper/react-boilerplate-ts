import React from 'react'

// STYLE
import './PageTitle.scss'

const PageTitle = (props) => {
	return (
		<div className="PageTitle">
			<h1 className="PageTitle__title">{ props.title ? props.title : "Title" }</h1>
		</div>
	)
}

export default PageTitle
