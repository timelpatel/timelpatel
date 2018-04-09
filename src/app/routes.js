import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './components/AboutPage/index.jsx'
import AssetPage from './components/AssetPage/index.jsx'
import CompositionPage from './components/CompositionPage/index.jsx'
import ElementPage from './components/ElementPage/index.jsx'
import WorkPage from './components/WorkPage/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={AboutPage}/>
        <Route path='/block-component-design' component={CompositionPage}/>
        <Route path='/asset' component={AssetPage}/>
        <Route path='/element' component={ElementPage}/>
        <Route path='/work' component={WorkPage}/>
    </div>
)

export default Routes
