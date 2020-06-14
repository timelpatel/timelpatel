import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from './routes.js'
// import Footer from './component/module/footer/index.jsx'

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
)
