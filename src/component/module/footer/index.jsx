import React from 'react'
import layout from './layout.scss'
import Button__Social from '../../block/button/social/index.jsx'
import Container__Content from '../../block/container/content/index.jsx'

const Footer = () => (

  <div className={layout.wrapper}>
    <Container__Content>
      <div className='row'>
        <div className='col col12'>
          <Button__Social
            data={[
              {
                href: 'https://linkedin.com/in/timelpatel',
                text: 'LinkedIn',
              },
              // {
              //   href: 'https://twitter.com/timelpatel',
              //   text: 'Twitter',
              // },
              {
                href: 'https://instagram.com/timelpatel/',
                text: 'Instagram',
              }
            ]}
          />
        </div>
      </div>
    </Container__Content>
  </div>

)

export default Footer
