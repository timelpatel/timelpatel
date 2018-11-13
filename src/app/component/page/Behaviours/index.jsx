import React from 'react'
import Container__Section from '../../../component/block/container/section/index.jsx'
import Template__Bcd from '../../../component/module/template/bcd/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'


const BehavioursPage = () => (

    <Template__Bcd>
        <div className='bcd'>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Page_Title
                            text='Behaviours'
                        />
                        <Typography__Body_Copy
                            text='Behaviours allow us to define a set of expectations'
                        />
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
                            text='Like our Components, Behaviours are stored in the root of the application folder.'
                        />
                        <Typography__Body_Copy
                            text='Below is a sample folder structure for what you might expect to find.'
                        />

                        <Typography__Code>
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
                        </Typography__Code>
                    </div>
                </div>
            </Container__Section>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Breaking down Behaviours'
                        />

                        <Typography__Sub_Heading
                            text='Functional'
                        />
                        <Typography__Body_Copy
                            text='Common functions, which may be used throughout the application. Again, using meaningful categories will be helpful for developers to find existing functions.'
                        />
                        {/* <Typography__Code>
                            add-numbers.js<br />
                            function addNumbers (n1, n2) &#123;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;return n1 + n2;<br />
                            &#125;
                        </Typography__Code> */}

                        <Typography__Sub_Heading
                            text='Motion &amp; Touch'
                        />
                        <Typography__Body_Copy
                            text='Here, we can define a set of animations and gestures, however it is recommended to define user actions. Delete message or open navigation, for example.'
                        />

                        <Typography__Sub_Heading
                            text='Validation'
                        />
                        <Typography__Body_Copy
                            text='Data validation includes the usual form field verification. This may be a good place to store a list of regex snippets too.'
                        />
                    </div>
                </div>
            </Container__Section>

        </div>
    </Template__Bcd>

)


export default BehavioursPage
