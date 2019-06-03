import React, { Component } from 'react'

import './PostCard.scss'

class PostCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
    }
    //
    openText = () => {
        this.setState({ open: !this.state.open })
    }

    setTextStatus = () => {
        return this.state.open
            ? { display: 'block' }
            : { display: 'none' }
    }
    //
    render () {
        return (
            <div className="PostCard">
                <div className="PostCard__head">
                    <div className="PostCard__photo"></div>
                    <span className="PostCard__username">User name</span>
                </div>
                <div className="PostCard__body">
                    <h3 className="PostCard__title">Post Title</h3>
                    <div className="PostCard__postlink" onClick={() => this.openText()}>...</div>
                    <p className="PostCard__text" style={this.setTextStatus()}>gfsdgfhsdgfhdsgfhjdsgfsdhfgdsjh</p>
                </div>
            </div>
        )
    }
}

export default PostCard