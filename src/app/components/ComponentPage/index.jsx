import React from 'react'
import {Link} from 'react-router-dom'


const ComponentPage = () => (

    <div className='ccm'>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h1>Component Composition Model</h1>
                    <p>The CCM is a methodology to structure digital components into manageable assets. It ensures consistency, whilst allowing flexibility for business requirements. Design language and naming conventions are downstreamed from the design community to software engineering, allowing for a seamless integration.</p>
                    <p>CCM has three main areas, which form the final digital component; Elements, Assets and Behaviours.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col3'>
                    <h3>Elements</h3>
                    <ul className='list__bullet'>
                        <li>Block</li>
                        <li>Pattern</li>
                        <li>Module</li>
                        <li>Page</li>
                        <li>Module</li>
                    </ul>
                </div>

                <div className='col col3'>
                    <h3>Assets</h3>
                    <ul className='list__bullet'>
                        <li>Colours</li>
                        <li>Grid</li>
                        <li>Typography</li>
                        <li>Iconography</li>
                    </ul>
                </div>

                <div className='col col3'>
                    <h3>Behaviours</h3>
                    <ul className='list__bullet'>
                        <li>Communication</li>
                        <li>Functional</li>
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
                    <p>Elements are the foundations of the composition model. Blocks, Patterns and Modules are how components are built from single elements into final usable components. Pages and Journeys are how a user will navigate to complete their desired goal.</p>
                    <p>To allow for flexibility, Blocks can be used within Blocks. Patterns can be used within Patterns and Modules can be used with Modules. It is important that a child element should only be updated at its parent and modifications should only occur at the parent and filter down into other Blocks, Patterns or Modules using the element.</p>

                    <h3>Block</h3>
                    <p>A Block is a single element, which is visually styled, but has no feasible usage on its own.</p>

                    <h3>Pattern</h3>
                    <p>A Pattern is one or more Blocks, arranged together to form a reusable layout.</p>

                    <h3>Module</h3>
                    <p>A Module is one or more Blocks and/or Patterns to create a fully functional, usable component.</p>

                    <h3>Page</h3>
                    <p>A Page is one or more Modules to create a view, which is part of a user’s journey.</p>

                    <h3>Journey</h3>
                    <p>A Journey is one or more Pages, brought together in a particular order to form a user Journey.</p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Assets</h2>
                    <p>Assets are a collection of brand personality, used within Blocks and Patterns.</p>

                    <h3>Colours</h3>
                    <p>All brand colours should be organised and named in accordance to their usage. Colours are used at Block level and should consider widespread change. This is why colour names should be based on usage, rather than visual colour.</p>

                    <p>Good: Error, Success, Warning<br />Bad: Green, Orange, Red</p>

                    <h3>Typography</h3>
                    <p>Brand typography should be declared and used within Blocks. It is advisable to have graceful degradation to common system fonts and take into account the variant in size.</p>

                    <h3>Iconography</h3>
                    <p>Iconography should be used at Block level. It is advisable to have a scalable format, which may have a predefined set of sizes, which can be referenced using t-shirt sizing.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Behaviours</h2>
                    <p>Behavioural elements are a set of expectations, which establish a consistent experience. This may include the tone of language to our audience, how we expect them to use the digital components and a set of rules, which govern the functional and data entry into business logic.</p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Blocks</h2>
                    <p>All Blocks belong to a particular category. Each Block may have optional attributes such as T-Shirt Sizing for Text Input Fields, for example. The optional attributes depend on the application and how the team want to manage change in the application.</p>

                    <p>The list of categories is dependent on the application, however here are some of the most common, with example Blocks.</p>

                    <ul className='list__bullet'>
                        <li>Call to Action</li>
                        <ul>
                            <li>Call to Action</li>
                            <li>Primary Button</li>
                            <li>Secondary Button</li>
                            <li>Social Button [Facebook, Google]</li>
                            <li>Tertiary Button</li>
                        </ul>

                        <li>Input Field</li>
                        <ul>
                            <li>Checkbox</li>
                            <li>Date</li>
                            <li>Dropdown</li>
                            <li>Text area</li>
                            <li>Text input [Email, Password, Text]</li>
                        </ul>

                        <li>Messaging and Notification</li>
                        <ul>
                            <li>Alert</li>
                            <li>Form error</li>
                        </ul>

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

                        <li>Tab</li>
                        <ul>
                            <li>Primary</li>
                            <li>Secondary</li>
                        </ul>

                        <li>Typography</li>
                        <ul>
                            <li>Body copy</li>
                            <li>Form Label</li>
                            <li>Page title</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>

    </div>

)


export default ComponentPage
