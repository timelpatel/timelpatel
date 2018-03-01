import React from 'react'
import {Link} from 'react-router-dom'


const AboutPage = () => (

    <div className='container'>
        <div className='me' />

        <div className='row'>
            <div className='col col10'>
                <h2>London based software engineer.<br />Timel provides creative and technical services to leading organisations.</h2>
                <h3>Creative</h3>
                <p>A life long passion for art &amp; design has been a clear asset in the digital space. Timel spent his early years as a designer and user experience consultant working with some of London’s finest companies.</p>
                <p>He is a strong believer in minimalism. His philosophy for design is to create clean layouts, focused on the user experience.</p>
                <h3>Technical</h3>
                <p>Meticulous and well organised, Timel is able to provide hands-on development as well as leadership skills. His vast experience has taken him on journeys from small start-up environments to enterprise level multi-million pound budget projects.</p>
            </div>
        </div>

        <div className='row'>
            <div className='col col3'>
                <Link
                    className='button'
                    to='/work'>
                    <p>View Clients &amp; Projects</p>
                </Link>
            </div>

            <div className='col col9'>
                <Link
                    className='button'
                    to='/block-component-design'>
                    <p>Block Component Design</p>
                </Link>
            </div>
        </div>

    </div>

)


export default AboutPage
