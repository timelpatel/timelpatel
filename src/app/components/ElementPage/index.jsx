import React from 'react'
import {Link} from 'react-router-dom'


const ElementPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col9'>
                    <h3>BCD</h3>
                    <h1>Elements</h1>
                </div>
                <div className='col col3'>
                    <Link
                        className='button'
                        to='/block-component-design'>
                        <p>Block Component Design</p>
                    </Link>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Folder structure</h2>
                    <p>Elements are stored in the component folder. Each type of Element is then stored within meaningful categories, followed by the component itself.</p>
                    <p>In the sample folder structure below, we have added HTML, CSS and JS files, however these can be replaced by the technology stack you are using (index.jsx and style.scss, for example). You may also wish to include other files, which relate to the component. This is completely fine as long as you abide by the fundamental rules of the system.</p>

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
                    <h2>Naming conventions</h2>
                    <p>We can use a BEM-style naming convention for our component names, however this is entirly up to preference. BEM works well because of it&#39;s double dashes and underscores allowing us to defrenciate between sections of our system, however the variant class names can get long. Using BEM as a wrapper class and specifiying shorter class names within would work as well.</p>
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

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Code structure</h2>
                    <p>Now that we have our component names and categories in place, we can use them within the code.</p>

                    <h3>HTML</h3>
                    <p className='code'>div class='category-name__element-name'<br />
                    div class='button__primary'</p>
                    <p className='code'>div class='category-name__element-name--variant'<br />
                    div class='button__primary--large'</p>

                    <h3>CSS</h3>
                    <p className='code'>.category-name__element-name<br />
                    .button__primary</p>
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
