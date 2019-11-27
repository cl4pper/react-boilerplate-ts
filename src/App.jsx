import React from 'react'
import { connect } from 'react-redux'

// STYLE
import './app.scss'

// COMPONENTS
import { ReactComponent as ReactLogo } from '@assets/images/react-logo.svg'
import { ReactComponent as GithubLogo } from '@assets/images/github-logo.svg'
import { ReactComponent as Linkedin } from '@assets/images/linkedin-logo.svg'
import { PageTitle, ContentSection, MainLink } from '@components'

const AppContainer = (props) => {
  const { strings } = props

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

const mapStateToProps = state => ({
  strings: state.strings.data
})

const App = connect(mapStateToProps)(AppContainer)

export default App
