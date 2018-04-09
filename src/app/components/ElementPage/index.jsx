import React from 'react'
import {Link} from 'react-router-dom'


const ElementPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col9'>
                    <h3><Link to='/block-component-design'>BCD</Link></h3>
                    <h1>Elements</h1>
                    <p>The most important part of the BCD system, Elements are the foundational infrastructure required to support the whole ecosystem.</p>
                    <p>To allow for flexibility, Blocks can be used within Blocks. Patterns can be used within Patterns and Modules can be used within Modules. It is important that an element should only be modified at its source and changes filter down. For example, it would be bad practice to change the visual styling of a block after it was imported into a pattern; we want to ensure a single source of truth policy.</p>
                    <div className='bcd-frame shadow'>
                        <img
                            alt='Elements overview'
                            src='/assets/img/bcd/elements-overview.png'
                            width='100%'
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Folder structure</h2>
                    <p>Elements are stored in the component folder. Each type of Element is then stored within meaningful categories, followed by the component itself.</p>
                    <p>In the sample folder structure below, we have added HTML, CSS and JS files, however these can be replaced by the technology stack in use (index.jsx and style.scss, for example). You may also wish to include other files, which relate to the component. This is completely fine as long as you abide by the fundamental rules of the system.</p>

                    <p className='folder'>
                        /component<br />
                        &nbsp;├── /block<br />
                        &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /block-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── style.css<br />
                        &nbsp;|<br />
                        &nbsp;├── /pattern<br />
                        &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /pattern-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── style.css<br />
                        &nbsp;|<br />
                        &nbsp;└── /module<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /module-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── index.html<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── script.js
                    </p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Code structure</h2>
                    <p>Now that we have our component names and categories in place, we can use them within the code. Notice how we use double dashes and underscores to differentiate between sections of our system.</p>

                    <h3>HTML</h3>
                    <p className='code'>div class='category-name--element-name'<br />
                    div class='button--primary'</p>
                    <p className='code'>div class='category-name--element-name__variant'<br />
                    div class='button--primary__large'</p>

                    <h3>CSS</h3>
                    <p className='code'>.category-name--element-name<br />
                    .button--primary</p>

                    <h3>JavaScript</h3>
                    <p>Scrpting files specific to certain components should reference the component name used in the HTML and CSS. This is different to scripting files found in the Behaviours section as they are for generic use and have their own naming convention.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>

            <div className='row'>
                <div className='col col10'>
                    <h2>Breaking down components</h2>
                    <p>The names you choose for your components are entirely up to you. We find that a design team, which starts to think about components is able to downstream their thoughts and naming conventions into engineering.</p>
                    <p>Components can sometimes look similar but have different usage in the application. In this case, it is good to think about change management. If the design or behaviour changed in one component, would you always want the same for the other?</p>
                    <p>Lets take a Primary and Secondary button for example. The only difference may be the background colour, however if we wanted to change the styling or sizing of one, does not always mean we want to change the other. One side effect of having such a managable system is that you may end up with slightly more code, however the advantages when it comes to re-designing components and testing components in isolation usually outweight the negatives.</p>
                    <p>Below are some example categories and component names.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <h3>Blocks</h3>
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

                        <li>Imagery</li>
                        <ul>
                            <li>Avatar</li>
                        </ul>

                        <li>Input Field</li>
                        <ul>
                            <li>Checkbox</li>
                            <li>Date</li>
                            <li>Dropdown</li>
                            <li>Text area</li>
                            <li>Text input</li>
                        </ul>
                    </ul>
                </div>

                <div className='col col6'>
                    <ul className='list__bullet'>
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

                        <li>Typography</li>
                        <ul>
                            <li>Body copy</li>
                            <li>Form label</li>
                            <li>Page title</li>
                            <li>Section title</li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <h3>Patterns</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Form</li>
                        <ul>
                            <li>Credit card</li>
                            <li>Date of birth</li>
                            <li>Telephone number</li>
                            <li>Text</li>
                        </ul>

                        <li>List</li>
                        <ul>
                            <li>Action</li>
                            <li>Comment</li>
                        </ul>
                    </ul>
                </div>

                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Messaging &amp; Communication</li>
                        <ul>
                            <li>Add comment</li>
                            <li>Send message</li>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <h3>Modules</h3>
                </div>
            </div>

            <div className='row'>
                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Messaging &amp; Communication</li>
                        <ul>
                            <li>Chat</li>
                            <li>Comments</li>
                        </ul>
                    </ul>
                </div>

                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Personal information</li>
                        <ul>
                            <li>Address</li>
                            <li>Payment</li>
                            <li>Telephone</li>
                        </ul>
                    </ul>
                </div>
            </div>

        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Example: Telephone number component</h2>
                    <p>Let&#39;s look at how we would use BCD to create a telephone number module.<br />
                    Below are the folder names for our components:-</p>
                    <ul className='list__bullet'>
                        <li>/component/block/input-field/dropdown</li>
                        <li>/component/block/input-field/text-input</li>
                        <li>/component/block/typography/form-label</li>
                        <li>/component/pattern/user-data/telephone-row</li>
                        <li>/component/module/personal-information/telephone-numbers</li>
                    </ul>

                    <h3>The Blocks</h3>
                    <p>We have our 3 blocks, visually styled but no content.</p>
                    <div className='bcd-frame shadow'>
                        <img
                            alt='Blocks example'
                            src='/assets/img/bcd/telephone-example-block.png'
                            width='100%'
                        />
                    </div>

                    <h3>The Pattern</h3>
                    <p>Here we have used our input-field Blocks to create a reusable Pattern. Styling used here is for positioning only. We do not change the visual appearance of our Blocks here, making Patterns a good area for testing for visual changes.</p>
                    <div className='bcd-frame shadow'>
                        <img
                            alt='Pattern example'
                            src='/assets/img/bcd/telephone-example-pattern.png'
                            width='100%'
                        />
                    </div>

                    <h3>The Module</h3>
                    <p>Here we can see a functional module, which is ready to be used at Page level. Any content or data is added here but there is no styling.</p>
                    <div className='bcd-frame shadow'>
                        <img
                            alt='Module example'
                            src='/assets/img/bcd/telephone-example-module.png'
                            width='100%'
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>

)


export default ElementPage
