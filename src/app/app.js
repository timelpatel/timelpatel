import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.js'
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'


const css = require('../../sass/base.scss')

const App = () => (
    <div>
        <Header />
        <Routes />
        <Footer />
    </div>
)


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
);
