import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.js'


const css = require('../../sass/base.scss')

const App = () => (
    <div>
        <Routes />
    </div>
)


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
