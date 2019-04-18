import React from 'react'
import Button__Primary from '../../../component/block/button/primary/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import CTA__BCD from '../../../component/module/cta/bcd/index.jsx'
import Header_Footer__Header from '../../../header-footer/header/index.jsx'
import Header_Footer__Footer from '../../../header-footer/footer/index.jsx'
import Imagery__Hero from '../../../component/block/imagery/hero/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'

const AboutPage = () => (

    <React.Fragment>

        <Header_Footer__Header />

        <Container__Section>
            <Imagery__Hero />

            <div className='row'>
                <div className='col col10'>
                    <Typography__Section_Title
                        text='London based software engineer. Timel provides creative and technical services to leading organisations.'
                    />

                    <Typography__Sub_Heading
                        text='Creative'
                    />
                    <Typography__Body_Copy
                        text='A life long passion for art &amp; design has been a clear asset in the digital space. Timel spent his early years as a designer and user experience consultant working with some of London’s finest companies.'
                    />
                    <Typography__Body_Copy
                        text='He is a strong believer in minimalism. His philosophy for design is to create clean layouts, focused on the user experience.'
                    />

                    <Typography__Sub_Heading
                        text='Technical'
                    />
                    <Typography__Body_Copy
                        text='Meticulous and well organised, Timel is able to provide hands-on development as well as leadership skills. His vast experience has taken him on journeys from small start-up environments to enterprise level multi-million pound budget projects.'
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <Button__Primary
                        href='/work'
                        text='View Clients &amp; Projects'
                    />
                </div>
            </div>
        </Container__Section>

        <CTA__BCD />

        <Header_Footer__Footer />

    </React.Fragment>

)


export default AboutPage
