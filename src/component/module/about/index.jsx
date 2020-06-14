import React from 'react'
import layout from './layout.scss'
import Container__Content from '../../block/container/content/index.jsx'
import Typography__Body from '../../block/typography/body/index.jsx'
// import Typography__Hero from '../../block/typography/hero/index.jsx'
import Typography__Section_Title from '../../block/typography/section-title/index.jsx'

const About = () => (

  <div className={layout.wrapper}>
    <Container__Content>
      <div className={layout.bio}>
        <img
          className={layout.me}
          src='/asset/img/me.png'
        />
        <Typography__Section_Title text='Engineer' />
        <Typography__Body>Meticulous and well organised, Timel is able to provide hands-on development as well as leadership skills.</Typography__Body>
        <Typography__Body>His vast experience has taken him on journeys from small start-up environments to enterprise level multi-million pound budget projects.</Typography__Body>
        <br /><br /><br /><br /><br />
        <Typography__Section_Title text='Design' />
        <Typography__Body>A life long passion for art &amp; design has been a clear asset in the digital space. Timel spent his early years as a designer and user experience consultant working with some of London’s finest companies.</Typography__Body>
        <Typography__Body>He is a strong believer in minimalism. His philosophy for design is to create clean layouts, focused on the user experience.</Typography__Body>
      </div>
    </Container__Content>
  </div>

)

export default About
