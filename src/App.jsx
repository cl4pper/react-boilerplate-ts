import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

// STYLE
import './app.scss'

// COMPONENTS
import PageTitle from './components/PageTitle/PageTitle'
import RoadmapList from './components/RoadmapList/RoadmapList';
import Counter from './components/Counter/Counter';
import { LinksHeader } from './containers/LinksHeader/LinksHeader'

const App = () => (
  <div className="app">
    <LinksHeader />

    <Route exact path="/" render={() => (
      <Fragment>
        <PageTitle />
        <Counter />
      </Fragment>
    )}></Route>

    <Route path="/list" render={() => (
      <RoadmapList />
    )}></Route>
  </div>
)

export default App
