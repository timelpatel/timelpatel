import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/index.jsx'
import AboutPage from './components/AboutPage/index.jsx'


const css = require('../../sass/base.scss')

const App = () => (
    <div>
        <Header />
        <AboutPage />
    </div>
)


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
