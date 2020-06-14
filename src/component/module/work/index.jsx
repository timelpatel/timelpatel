import React from 'react'
import layout from './layout.scss'
import Container__Content from '../../block/container/content/index.jsx'
import Typography__Bullet_List from '../../block/typography/bullet-list/index.jsx'
import Typography__Section_Title from '../../block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../block/typography/sub-heading/index.jsx'

const Work = () => (

  <div className={layout.wrapper}>
    <Container__Content>
      <div className={layout.ping}>
        <Typography__Section_Title text='Clients' />
      </div>

      <div className='row'>
        <div className='col col4'>
          <Typography__Sub_Heading
            text='Banking &amp; Financial Services'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Deloitte'},
                {id: 2, text:'HSBC'},
                {id: 3, text:'Lloyds Banking Group'},
              ]
            }
          />

          <Typography__Sub_Heading
            text='Digital Services'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Billington Cartmell'},
                {id: 2, text:'Dare Digital'},
                {id: 3, text:'Deloitte Digital'},
                {id: 4, text:'Investis'},
                {id: 5, text:'Reflector Interactive'},
                {id: 6, text:'Steak Digital'},
                {id: 7, text:'Tequila'},
                {id: 8, text:'TMP Worldwide'},
                {id: 9, text:'Wipro Digital'},
              ]
            }
          />
        </div>

        <div className='col col4'>
          <Typography__Sub_Heading
            text='Gaming &amp; Entertainment'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Camelot Group'},
                {id: 2, text:'Ideaworks 3D'},
              ]
            }
          />

          <Typography__Sub_Heading
            text='Government &amp; Public Sector'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'The National Archives'},
              ]
            }
          />

          <Typography__Sub_Heading
            text='Information'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Reed Business Information for Valtech'},
              ]
            }
          />
        </div>

        <div className='col col4'>
          <Typography__Sub_Heading
            text='Media &amp; Broadcasting'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'BBC Worldwide'},
              ]
            }
          />

          <Typography__Sub_Heading
            text='Retail'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Comet Group'},
              ]
            }
          />

          <Typography__Sub_Heading
              text='Technology Start-up'
          />
          <Typography__Bullet_List
            listItems={
              [
                {id: 1, text:'Evi Technologies (an Amazon company)'},
                {id: 2, text:'Livedrive Internet'},
              ]
            }
          />
        </div>
      </div>
    </Container__Content>
  </div>

)

export default Work
