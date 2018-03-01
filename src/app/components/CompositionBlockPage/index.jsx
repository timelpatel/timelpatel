import React from 'react'
import {Link} from 'react-router-dom'


const CompositionBlockPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col9'>
                    <h3>BCD</h3>
                    <h1>Blocks</h1>
                </div>
                <div className='col col3'>
                    <Link
                        className='button'
                        to='/block-component-design'>
                        <p>Block Component Design</p>
                    </Link>
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <p>All Blocks belong to a particular category. Each Block may have optional attributes such as t-shirt sizing for Text Input Fields, for example. The optional attributes depend on the application and how the team want to manage change in the application.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <p>The list of categories is dependent on the application, however here are some of the most common, with example Blocks.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Button</li>
                        <ul>
                            <li>Primary</li>
                            <li>Secondary</li>
                            <li>Social</li>
                            <li>Tertiary</li>
                        </ul>

                        <li>Input Field</li>
                        <ul>
                            <li>Checkbox</li>
                            <li>Date</li>
                            <li>Dropdown</li>
                            <li>Text area</li>
                            <li>Text input</li>
                        </ul>

                        <li>Messaging and Notification</li>
                        <ul>
                            <li>Alert</li>
                            <li>Form error</li>
                        </ul>
                    </ul>
                </div>

                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Navigation</li>
                        <ul>
                            <li>Main</li>
                            <li>Sidebar</li>
                        </ul>

                        <li>Table</li>
                        <ul>
                            <li>Data</li>
                            <li>Product select</li>
                        </ul>

                        <li>Typography</li>
                        <ul>
                            <li>Body copy</li>
                            <li>Form Label</li>
                            <li>Page title</li>
                            <li>Section title</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>

    </div>

)


export default CompositionBlockPage
