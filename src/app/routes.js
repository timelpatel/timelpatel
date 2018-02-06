import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './components/AboutPage/index.jsx'
import CompositionPage from './components/CompositionPage/index.jsx'
import CompositionBlockPage from './components/CompositionBlockPage/index.jsx'
import WorkPage from './components/WorkPage/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={AboutPage}/>
        <Route path='/interface-composition-model' component={CompositionPage}/>
        <Route path='/block' component={CompositionBlockPage}/>
        <Route path='/work' component={WorkPage}/>
    </div>
)

export default Routes
