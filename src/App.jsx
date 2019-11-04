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
      <PageTitle
        subtitle="by cl4pper"
        light>
        React Boilerplate <ReactLogo className="ReactLogo"/>
      </PageTitle>
    </ContentSection>
  </div>
  )
}

export default App
