import React from 'react'
import {Link} from 'react-router-dom'


const CompositionPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h1>Block Component Design (BCD)</h1>
                    <p>BCD is a methodology to structure digital components into manageable assets. It ensures consistency whilst allowing flexibility for business requirements. Design language and naming conventions are downstreamed from the design community to software engineering, allowing for a seamless integration.</p>
                    <p>There are three main areas, which form the final component; Elements, Assets and Behaviours. Usage of this system can vary based on application requirements. It is however advisable as a minimum to use Blocks, Patterns and Modules from Elements. All other sections can be included, if and when required.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col3'>
                    <h3><Link to='/element'>Elements</Link></h3>
                    <ul className='list__bullet'>
                        <li>Block</li>
                        <li>Pattern</li>
                        <li>Module</li>
                        <li>Page</li>
                        <li>Journey</li>
                    </ul>
                </div>

                <div className='col col3'>
                    <h3>Assets</h3>
                    <ul className='list__bullet'>
                        <li>Colour</li>
                        <li>Font</li>
                        <li>Grid</li>
                        <li>Icon</li>
                    </ul>
                </div>

                <div className='col col3'>
                    <h3>Behaviours</h3>
                    <ul className='list__bullet'>
                        <li>Communication</li>
                        <li>Functional</li>
                        <li>Motion</li>
                        <li>Touch</li>
                        <li>Validation</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Elements</h2>
                    <p>Elements are the foundations of the BCD system. Blocks, Patterns and Modules are how components are built from single elements into usable components. Pages and Journeys are how a user will navigate to complete their desired goal.</p>

                    <h3>Block</h3>
                    <p>A Block is a single element, which is visually styled.</p>

                    <h3>Pattern</h3>
                    <p>A Pattern is one or more Blocks, arranged together to form a reusable layout.</p>

                    <h3>Module</h3>
                    <p>A Module is one or more Blocks and/or Patterns to create a fully functional, usable component with data and content.</p>

                    <h3>Page</h3>
                    <p>A Page is one or more Modules to create a view, which is part of a user&#39;s journey.</p>

                    <h3>Journey</h3>
                    <p>A Journey is one or more Pages, brought together in a particular order to form a user Journey.</p>

                    <br /><br />
                    <Link
                        className='button'
                        to='/element'>
                        <p>More about Elements</p>
                    </Link>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Assets</h2>
                    <p>Assets are a collection of branding used within Blocks and Patterns.</p>

                    <h3>Colour</h3>
                    <p>All colours should be organised in accordance to usage and names should be based on this scenario, rather than visual appearance. Colours are used at Block level so any change should consider consider widespread impact.</p>
                </div>
            </div>
{/*
            <div className='row'>
                <div className='col col5'>
                    <table className='table--goodbad'>
                        <thead>
                            <tr>
                                <td className='good'>Good</td>
                                <td className='bad'>Bad</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Error</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <td>Success</td>
                                <td>Green</td>
                            </tr>
                            <tr>
                                <td>Warning</td>
                                <td>Orange</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
*/}
            <div className='row'>
                <div className='col col10'>
                    <h3>Font</h3>
                    <p>The font library is a collection of font combinations, which can be used on the platform. They are always consumed at Block level.</p>

                    <h3>Grid</h3>
                    <p>The grid system is the container for some of our Elements. Some may wonder why this is not part of our Blocks or Patterns, however we see our Elements consuming the Grid and therefore it is part of our Assets.</p>

                    <h3>Icon</h3>
                    <p>The icon collection should be used at Block level. It is advisable to have a scalable format, which may have a predefined set of sizes, which can be referenced using t-shirt sizing.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Behaviours</h2>
                    <p>Behavioural elements are a set of expectations, which encourage a consistent experience. This may include the tone of language, user interaction with the application or a set of rules, which govern data into the system.</p>

                    <h3>Communication</h3>
                    <p>Writing style and consistent wording is important. This could be defined in a best practice document or stored in the code, as a list of common phrases. Communication is a section, which may not be suitable for all projects so you should decide if it is right and manageable for your application.</p>

                    <h3>Functional</h3>
                    <p>Functional behaviour may include a set of reusable functions for a variety of things. Something to truncate text , for example.</p>

                    <h3>Motion</h3>
                    <p>Animating particular interactions or events can be a nice and subtle way to notify the user of actions. A panel sliding up or fading out a deleted message are good examples. Like other behaviours, the idea is to define the actual action and not the movement itself; delete message instead of fade-out, for example.</p>

                    <h3>Touch</h3>
                    <p>User input from touch devices can sometimes vary, however we are starting to see a growing number of consistent touch actions across leading applications. Swiping right on a message to delete? Maybe left to mark as unread? Either way, having these interactions defined can make for a better experience.</p>

                    <h3>Validation</h3>
                    <p>Consistency in this field is important as it is usually an area for unnecessary abrupt user messaging. Messages are based on the application however we should consider the user has either accidentally inputted data or it was not clear what data to enter.</p>
                </div>
            </div>
        </div>

    </div>

)


export default CompositionPage
