import React, { Component } from 'react'
import { connect } from 'react-redux'

// STYLE
import './app.scss'

// STORE
import { githubRequest } from '@store/modules/github'

// COMPONENTS
import { ReactComponent as ReactLogo } from '@assets/images/react-logo.svg'
import { ReactComponent as GithubLogo } from '@assets/images/github-logo.svg'
import { ReactComponent as Linkedin } from '@assets/images/linkedin-logo.svg'
import { PageTitle, ContentSection, MainLink } from '@components'

class AppContainer extends Component {
  componentDidMount () {
    this.props.loadData()
  }

  render () {
    const { strings, github } = this.props

    // console.log(github.data)

    return (
      <div className="app">
      <ContentSection dark height="50vh">
        <PageTitle
          subtitle="by cl4pper"
          light>
          {strings.title} <ReactLogo className="ReactLogo"/>
        </PageTitle>
      </ContentSection>
      <ContentSection
        light
        spaced
        height="50vh">
        <MainLink
          to="https://github.com/cl4pper/react-boilerplate"
          logo={<GithubLogo />}>GitHub</MainLink>
        <MainLink
          to="https://www.linkedin.com/in/matheus-pereira-de-souza-19895316a/"
          logo={<Linkedin />}>LinkedIn</MainLink>
      </ContentSection>
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(githubRequest())
})

const mapStateToProps = state => ({
  strings: state.strings.data,
  github: state.github
})

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default App
