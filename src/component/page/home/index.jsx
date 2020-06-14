import React from 'react'
import About from '../../../component/module/about/index.jsx'
import Container__Page from '../../../component/block/container/page/index.jsx'
import Home from '../../../component/module/home/index.jsx'
import Work from '../../../component/module/work/index.jsx'

const HomePage = () => (

  <Container__Page>
    <Home />
    <About />
    <Work />
  </Container__Page>

)

export default HomePage
