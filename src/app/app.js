import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.js'
// import createBrowserHistory from 'history/createBrowserHistory'
import Header from './components/Header/index.jsx'


// const customHistory = createBrowserHistory()
const css = require('../../sass/base.scss')

const App = () => (
    <div>
        <Header />
        <Routes />
    </div>
)


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
