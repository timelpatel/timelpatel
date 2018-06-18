import React from 'react'
import {Link} from 'react-router-dom'


const BehavioursPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h3><Link to='/block-component-design'>BCD</Link></h3>

                    <h1>Behaviours</h1>
                    <p>Behaviours allow us to define a set of expectations</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Folder structure</h2>
                    <p>Like our Components, Behaviours are stored in the root of the BCD folder.</p>
                    <p>Below is a sample folder structure for what you might expect to find.</p>

                    <p className='folder'>
                        /behaviours<br />
                        &nbsp;├── /functional<br />
                        &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── functional-name.js<br />
                        &nbsp;|<br />
                        &nbsp;├── /motion-touch<br />
                        &nbsp;| &nbsp;&nbsp; └── /category-name<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── /style.css<br />
                        &nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /script.js<br />
                        &nbsp;|<br />
                        &nbsp;└── /validation<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── validation-name.js
                    </p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Breaking down Behaviours</h2>

                    <h3>Functional</h3>
                    <p>Common functions, which may be used throughout the application.</p>
                    <p className='code'>add-numbers.js<br />
                        function addNumbers (n1, n2) <br />&nbsp;&nbsp;&nbsp;&nbsp;return n1 + n2;<br />
                    </p>

                    <h3>Motion &amp; Touch</h3>
                    <p>Here, we could define a set of animations and gestures, however it is also recommended to define user actions. Delete message or open navigation for example.</p>

                    <h3>Validation</h3>
                    <p>Data validation includes the usual form field verification. This may be a good place to store a list of regex snippets.</p>
                </div>
            </div>
        </div>

    </div>

)


export default BehavioursPage
