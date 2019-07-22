import React from 'react'
import { Route } from 'react-router-dom'

// STYLE
import './app.scss'

// COMPONENTS
import { LinksHeader } from '@containers'
import { Main } from '@components'

const App = () => (
  <div className="app">
    <LinksHeader />

    <Route exact path="/" render={() => (
      <Main/>
    )}></Route>

    <Route path="/list" render={() => (
      <h1>List</h1>
    )}></Route>
  </div>
)

export default App
