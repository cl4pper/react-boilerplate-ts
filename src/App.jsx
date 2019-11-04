import React from 'react'

// STYLE
import './app.scss'

// COMPONENTS
import { ReactComponent as ReactLogo } from '@assets/images/react-logo.svg'
import { PageTitle, ContentSection } from '@components'

const App = () => {
  return (
    <div className="app">
    <ContentSection dark height="50vh">
      <PageTitle light>React Boilerplate <ReactLogo className="ReactLogo"/></PageTitle>
    </ContentSection>
  </div>
  )
}

export default App
