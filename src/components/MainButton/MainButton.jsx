import React, { Component  } from 'react'

// STYLE
import './MainButton.scss'

export default class MainButton extends Component {
	constructor(props) {
		super(props)
	}

	showURL = () => {
		alert(window.location.href)
	}

	render() {
			return (
				<button
					className="MainButton"
					onClick={this.props.action}>{this.props.children}</button>
			)
	}
}

// export default MainButton
