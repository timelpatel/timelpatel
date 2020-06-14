import React from 'react'
import layout from './layout.scss'
import Container__Content from '../../block/container/content/index.jsx'
import Typography__Hero from '../../block/typography/hero/index.jsx'

const Home = () => (

  <div className={layout.wrapper}>
    <Container__Content>
      <div className={layout.circle}>
        <Typography__Hero text='Timel' />
      </div>
    </Container__Content>
  </div>

)

export default Home
