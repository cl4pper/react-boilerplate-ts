import * as React from 'react'
import { Link, Route } from 'react-router-dom'

// STYLE
import './RouteComponent.scss'

const RouteComponent = (props) => {
	return (
		<Route
			path={props.to}
			exact={true}
			children={({match}) => (
				<div className={match ? "active" : "not-active"}>
					<Link to={props.to}>{props.label}</Link>
				</div>
			)}
		/>
	)
}

export { RouteComponent }
