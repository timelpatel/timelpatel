import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './components/AboutPage/index.jsx'
import AssetsPage from './components/AssetsPage/index.jsx'
import BehavioursPage from './components/BehavioursPage/index.jsx'
import CompositionPage from './components/CompositionPage/index.jsx'
import ElementsPage from './components/ElementsPage/index.jsx'
import WorkPage from './components/WorkPage/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={AboutPage}/>
        <Route path='/block-component-design' component={CompositionPage}/>
        <Route path='/assets' component={AssetsPage}/>
        <Route path='/behaviours' component={BehavioursPage}/>
        <Route path='/elements' component={ElementsPage}/>
        <Route path='/work' component={WorkPage}/>
    </div>
)

export default Routes
