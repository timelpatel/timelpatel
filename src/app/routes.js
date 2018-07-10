import React from 'react'
import { Route } from 'react-router-dom'
import AboutPage from './component/page/About/index.jsx'
import AssetsPage from './component/page/Assets/index.jsx'
import BehavioursPage from './component/page/Behaviours/index.jsx'
import BcdPage from './component/page/bcd/index.jsx'
import ComponentsPage from './component/page/components/index.jsx'
import WorkPage from './component/page/Work/index.jsx'


const Routes = () => (
    <div>
        <Route exact path='/' component={AboutPage}/>
        <Route path='/block-component-design' component={BcdPage}/>
        <Route path='/assets' component={AssetsPage}/>
        <Route path='/behaviours' component={BehavioursPage}/>
        <Route path='/components' component={ComponentsPage}/>
        <Route path='/work' component={WorkPage}/>
    </div>
)

export default Routes
