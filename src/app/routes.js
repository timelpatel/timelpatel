import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './components/AboutPage/index.jsx'
import ComponentPage from './components/ComponentPage/index.jsx'
import WorkPage from './components/WorkPage/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={AboutPage}/>
        <Route path='/component-composition-model' component={ComponentPage}/>
        <Route path='/work' component={WorkPage}/>
    </div>
)

export default Routes
