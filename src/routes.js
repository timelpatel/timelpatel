import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './component/page/home/index.jsx'

const Routes = () => (
  <React.Fragment>
    <Route
      component={HomePage}
      exact
      path='/'
    />
  </React.Fragment>
)

export default Routes
