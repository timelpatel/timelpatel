import React from 'react'
import {Link} from 'react-router-dom'
import Button__Primary from '../../../component/block/button/primary/index.jsx'
import Container__Billboard from '../../../component/block/container/billboard/index.jsx'
import Container__Section from '../../../component/block/container/section/index.jsx'
import Template__Bcd from '../../../component/module/template/bcd/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Loud from '../../../component/block/typography/loud/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Loud from '../../../component/block/typography/sub-loud/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'


const BcdPage = () => (

    <Template__Bcd>
        <div className='bcd'>

            <Container__Billboard>
                <div className='row'>
                    <div className='col col12'>
                        <Typography__Loud
                            text='Block Component Design'
                        />
                        <Typography__Sub_Loud
                            text='A complete structure for your digital components'
                        />
                    </div>
                </div>
            </Container__Billboard>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Body_Copy
                            text='BCD is a methodology to structure digital components into manageable elements. It ensures consistency whilst allowing flexibility for business requirements. Design language and naming conventions are downstreamed from the design community to software engineering, allowing for a seamless integration.'
                        />
                        <Typography__Body_Copy
                            text='There are three main areas, which form the final element; Components, Assets and Behaviours. Usage of this system can vary based on application requirements. It is however advisable as a minimum to use Blocks, Patterns and Modules from Components. All other sections can be included, if and when required.'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col3'>
                        <Typography__Sub_Heading>
                            <Link to='/components'>Components</Link>
                        </Typography__Sub_Heading>
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Block'},
                                    {id: 2, text:'Pattern'},
                                    {id: 3, text:'Module'},
                                    {id: 4, text:'Page'},
                                    {id: 5, text:'Journey'},
                                ]
                            }
                        />
                    </div>

                    <div className='col col3'>
                        <Typography__Sub_Heading>
                            <Link to='/assets'>Assets</Link>
                        </Typography__Sub_Heading>
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Colour'},
                                    {id: 2, text:'Font'},
                                    {id: 3, text:'Icon'},
                                ]
                            }
                        />
                    </div>

                    <div className='col col3'>
                        <Typography__Sub_Heading>
                            <Link to='/behaviours'>Behaviours</Link>
                        </Typography__Sub_Heading>
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Functional'},
                                    {id: 2, text:'Motion & Touch'},
                                    {id: 3, text:'Validation'},
                                ]
                            }
                        />
                    </div>
                </div>
            </Container__Section>

            <Container__Section alt='alt'>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Components'
                        />
                        <Typography__Body_Copy
                            text='Components are the foundations of the BCD system. Blocks, Patterns and Modules are how components are built from single elements into usable components. Pages and Journeys are how a user will navigate to complete their desired goal.'
                        />

                        <Typography__Sub_Heading
                            text='Block'
                        />
                        <Typography__Body_Copy
                            text='A Block is a single element, which is visually styled.'
                        />

                        <Typography__Sub_Heading
                            text='Pattern'
                        />
                        <Typography__Body_Copy
                            text='A Pattern is one or more Blocks, arranged together to form a reusable layout.'
                        />

                        <Typography__Sub_Heading
                            text='Module'
                        />
                        <Typography__Body_Copy
                            text='A Module is one or more Blocks and/or Patterns to create a fully functional, usable component with data and content.'
                        />

                        <Typography__Sub_Heading
                            text='Page'
                        />
                        <Typography__Body_Copy
                            text='A Page is one or more Modules to create a view, which is part of a user&#39;s journey.'
                        />

                        <Typography__Sub_Heading
                            text='Journey'
                        />
                        <Typography__Body_Copy
                            text='A Journey is one or more Pages, brought together in a particular order to form a user Journey.'
                        />

                        <br /><br />
                        <Button__Primary
                            href='/components'
                            text='More about Components'
                        />
                    </div>
                </div>
            </Container__Section>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Assets'
                        />
                        <Typography__Body_Copy
                            text='A collection of brand assets used within Blocks.'
                        />

                        <Typography__Sub_Heading
                            text='Colour'
                        />
                        <Typography__Body_Copy
                            text='All colours should be organised in accordance to usage and names should be based on this scenario, rather than visual appearance. Colours are used at Block level so any change should consider widespread impact.'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Sub_Heading
                            text='Font'
                        />
                        <Typography__Body_Copy
                            text='The font library is a collection of font combinations, which can be used on the platform. They are always consumed at Block level.'
                        />

                        <Typography__Sub_Heading
                            text='Icon'
                        />
                        <Typography__Body_Copy
                            text='The icon collection should be used at Block level. It is advisable to have a scalable format, which may have a predefined set of sizes, which can be referenced using t-shirt sizing.'
                        />

                        <br /><br />
                        <Button__Primary
                            href='/assets'
                            text='More about Assets'
                        />
                    </div>
                </div>
            </Container__Section>

            <Container__Section alt='alt'>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Behaviours'
                        />
                        <Typography__Body_Copy
                            text='Behavioural elements are a set of expectations, which encourage a consistent experience. This may include user interaction with the application or a set of rules, which govern data into the system.'
                        />

                        <Typography__Sub_Heading
                            text='Functional'
                        />
                        <Typography__Body_Copy
                            text='Functional behaviour may include a set of reusable functions for a variety of things. Something to truncate text, for example.'
                        />

                        <Typography__Sub_Heading
                            text='Motion &amp; Touch'
                        />
                        <Typography__Body_Copy
                            text='Animating particular interactions or events can be a nice and subtle way to notify the user of actions. A panel sliding up or fading out a deleted message are good examples. Like other behaviours, the idea is to define the actual action and not the movement itself; delete message instead of fade-out, for example.'
                        />
                        <Typography__Body_Copy
                            text='User input from touch devices can sometimes vary, however we are starting to see a growing number of consistent touch actions across leading applications. Swiping right on a message to delete? Maybe left to mark as unread? Either way, having these interactions defined can make for a better experience.'
                        />

                        <Typography__Sub_Heading
                            text='Validation'
                        />
                        <Typography__Body_Copy
                            text='Consistency in this field is important as it is usually an area for unnecessary abrupt user messaging. Messages are based on the application however we should consider the user has either accidentally inputted data or it was not clear what data to enter.'
                        />

                        <br /><br />
                        <Button__Primary
                            href='/behaviours'
                            text='More about Behaviours'
                        />
                    </div>
                </div>
            </Container__Section>

        </div>
    </Template__Bcd>

)


export default BcdPage
