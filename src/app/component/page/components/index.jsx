import React from 'react'
import Container__Section from '../../../component/block/container/section/index.jsx'
import Template__Bcd from '../../../component/module/template/bcd/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Bullet_List from '../../../component/block/typography/bullet-list/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../../component/block/typography/subtle-title/index.jsx'


const ComponentsPage = () => (

    <Template__Bcd>
        <div className='bcd'>

            <Container__Section>
                <div className='row'>
                    <div className='col col9'>
                        <Typography__Page_Title
                            text='Components'
                        />
                        <Typography__Body_Copy
                            text='The most important part of the BCD system, Components are the foundational infrastructure required to support the whole ecosystem.'
                        />
                        <Typography__Body_Copy
                            text='To allow for flexibility, Blocks can be used within Blocks. Patterns can be used within Patterns and Modules can be used within Modules. It is important that an component should only be modified at its source and changes filter down. For example, it would be bad practice to change the visual styling of a block after it was imported into a module; we want to ensure a single source of truth policy.'
                        />
                        <div className='bcd-frame shadow'>
                            <img
                                alt='Components overview'
                                src='/assets/img/bcd/elements-overview.png'
                                width='100%'
                            />
                        </div>
                    </div>
                </div>
            </Container__Section>

            <Container__Section alt='alt'>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Folder structure'
                        />
                        <Typography__Body_Copy
                            text='Components are stored in the component folder. Each type of Component is then stored within meaningful categories, followed by the component itself.'
                        />
                        <Typography__Body_Copy
                            text='In the sample folder structure below, we have added HTML, CSS and JS files, however these can be replaced by the technology stack in use (index.jsx and style.scss, for example). You may also wish to include other files, which relate to the component. This is completely fine as long as you abide by the fundamental rules of the system.'
                        />

                        <Typography__Code>
                            /component<br />
                            &nbsp;├── /block<br />
                            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /block-name<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── style.css<br />
                            &nbsp;|<br />
                            &nbsp;├── /pattern<br />
                            &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── pattern-name.css<br />
                            &nbsp;|<br />
                            &nbsp;└── /module<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /module-name<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── script.js
                        </Typography__Code>
                    </div>
                </div>
            </Container__Section>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Code structure'
                        />
                        <Typography__Body_Copy
                            text='Now that we have our component names and categories in place, we can use them within the code. Notice how we use double dashes and underscores to differentiate between sections of our system.'
                        />

                        <Typography__Sub_Heading
                            text='HTML'
                        />
                        <Typography__Code>
                            div class='category-name__component-name'<br />
                            div class='button__primary'<br />
                            div class='category-name__component-name--variant'<br />
                            div class='button__primary--large'
                        </Typography__Code>

                        <Typography__Sub_Heading
                            text='CSS'
                        />
                        <Typography__Code>.category-name__component-name<br />
                            .button__primary
                        </Typography__Code>

                        <Typography__Sub_Heading
                            text='JavaScript'
                        />
                        <Typography__Body_Copy
                            text='Scripting files specific to certain components should reference the component name used in the HTML and CSS. This is different to scripting files found in the Behaviours section as they are for generic use and have their own naming convention.'
                        />
                    </div>
                </div>
            </Container__Section>

            <Container__Section alt='alt'>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Breaking down components'
                        />
                        <Typography__Body_Copy
                            text='The names you choose for your components are entirely up to you. We find that a design team, which starts to think about components is able to downstream their thoughts and naming conventions into engineering.'
                        />
                        <Typography__Body_Copy
                            text='Components can sometimes look similar but have different usage in the application. In this case, it is good to think about change management. If the design or behaviour changed in one component, would you always want the same for the other?'
                        />
                        <Typography__Body_Copy
                            text='Lets take a Primary and Secondary button for example. The only difference may be the background colour, however if we wanted to change the styling or sizing of one, does not always mean we want to change the other. One side effect of having such a managable system is that you may end up with slightly more code, however the advantages when it comes to re-designing components and testing components in isolation usually outweight the negatives.'
                        />
                        <Typography__Body_Copy
                            text='Below are some example categories and component names.'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Sub_Heading
                            text='Blocks'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Button'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Primary'},
                                    {id: 2, text:'Secondary'},
                                    {id: 3, text:'Social'},
                                    {id: 4, text:'Tertiary'},
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='Imagery'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Avatar'}
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='Input Field'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Checkbox'},
                                    {id: 2, text:'Date'},
                                    {id: 3, text:'Dropdown'},
                                    {id: 4, text:'Text area'},
                                    {id: 5, text:'Text input'},
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='Messaging and Notification'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Alert'},
                                    {id: 2, text:'Form error'},
                                ]
                            }
                        />
                    </div>

                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Navigation'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Main'},
                                    {id: 2, text:'Sidebar'},
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='Table'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Data'},
                                    {id: 2, text:'Product select'},
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='Typography'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Body copy'},
                                    {id: 2, text:'Form label'},
                                    {id: 3, text:'Page title'},
                                    {id: 4, text:'Section title'},
                                ]
                            }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Sub_Heading
                            text='Patterns'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Form'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Credit card'},
                                    {id: 2, text:'Date of birth'},
                                    {id: 3, text:'Telephone number'},
                                    {id: 4, text:'Text'},
                                ]
                            }
                        />

                        <Typography__Subtle_Title
                            text='List'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Action'},
                                    {id: 2, text:'Comment'},
                                ]
                            }
                        />
                    </div>

                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Messaging &amp; Communication'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Add comment'},
                                    {id: 2, text:'Send message'},
                                ]
                            }
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Sub_Heading
                            text='Modules'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Messaging &amp; Communication'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Chat'},
                                    {id: 2, text:'Comments'},
                                ]
                            }
                        />
                    </div>

                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Personal information'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'Address'},
                                    {id: 2, text:'Payment'},
                                    {id: 3, text:'Telephone'}
                                ]
                            }
                        />
                    </div>
                </div>

            </Container__Section>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Example: Telephone number component'
                        />
                        <Typography__Body_Copy
                            text='Let&#39;s look at how we would use BCD to create a telephone number module.'
                        />
                        <Typography__Body_Copy
                            text='Below are the folder names for our components:-'
                        />
                        <Typography__Bullet_List
                            listItems={
                                [
                                    {id: 1, text:'/component/block/input-field/dropdown'},
                                    {id: 2, text:'/component/block/input-field/text-input'},
                                    {id: 3, text:'/component/block/typography/form-label'},
                                    {id: 4, text:'/component/pattern/user-data/telephone-row.css'},
                                    {id: 5, text:'/component/module/personal-information/telephone-numbers'},
                                ]
                            }
                        />

                        <Typography__Sub_Heading
                            text='The Blocks'
                        />
                        <Typography__Body_Copy
                            text='We have our 3 blocks, visually styled but no content.'
                        />
                        <div className='bcd-frame shadow'>
                            <img
                                alt='Blocks example'
                                src='/assets/img/bcd/telephone-example-block.png'
                                width='100%'
                            />
                        </div>

                        <Typography__Sub_Heading
                            text='The Pattern'
                        />
                        <Typography__Body_Copy
                            text='Here we have used our input-field Blocks to create a reusable Pattern. Styling used here is for positioning only. We do not change the visual appearance of our Blocks here, making Patterns a good area for testing for visual changes.'
                        />
                        <div className='bcd-frame shadow'>
                            <img
                                alt='Pattern example'
                                src='/assets/img/bcd/telephone-example-pattern.png'
                                width='100%'
                            />
                        </div>

                        <Typography__Sub_Heading
                            text='The Module'
                        />
                        <Typography__Body_Copy
                            text='Here we can see a functional module, which is ready to be used at Page level. Any content or data is added here but there is no styling.'
                        />
                        <div className='bcd-frame shadow'>
                            <img
                                alt='Module example'
                                src='/assets/img/bcd/telephone-example-module.png'
                                width='100%'
                            />
                        </div>
                    </div>
                </div>
            </Container__Section>

        </div>
    </Template__Bcd>

)


export default ComponentsPage
