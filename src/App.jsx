import React from 'react'
import { Route } from 'react-router-dom'

// STYLE
import './app.scss'

// COMPONENTS
import { PageTitle, ContentSection } from '@components'

const App = () => (
  <div className="app">
    <ContentSection dark height="50vh">
      <PageTitle light>React Boilerplate</PageTitle>
    </ContentSection>
  </div>
)

export default App
