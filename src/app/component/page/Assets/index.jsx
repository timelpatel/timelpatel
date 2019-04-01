import React from 'react'
import Container__Section from '../../../component/block/container/section/index.jsx'
import Template__Bcd from '../../../component/module/template/bcd/index.jsx'
import Typography__Body_Copy from '../../../component/block/typography/body-copy/index.jsx'
import Typography__Code from '../../../component/block/typography/code/index.jsx'
import Typography__Page_Title from '../../../component/block/typography/page-title/index.jsx'
import Typography__Section_Title from '../../../component/block/typography/section-title/index.jsx'
import Typography__Sub_Heading from '../../../component/block/typography/sub-heading/index.jsx'
import Typography__Subtle_Title from '../../../component/block/typography/subtle-title/index.jsx'


const AssetPage = () => (

    <Template__Bcd>
        <div className='bcd'>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Page_Title
                            text='Assets'
                        />
                        <Typography__Body_Copy
                            text='Assets allow us to moderate a strict branding policy across our application, by only allowing pre-defined values. These rules can be enforced at Engineering level using test scripts. Maybe Blocks do not accept hex colour values or font and icons can not be hardcoded into the styling file.'
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
                            text='Like our Components, Assets are stored in the root of the application folder. Some assets are then categorised, whilst others are put into the name of the asset.'
                        />
                        <Typography__Body_Copy
                            text='Below is a sample folder structure for what you might expect to find.'
                        />

                        <Typography__Code>
                            /asset<br />
                            &nbsp;├── /colour<br />
                            &nbsp;| &nbsp;&nbsp; └── /category-name.css<br />
                            &nbsp;|<br />
                            &nbsp;├── /font<br />
                            &nbsp;| &nbsp;&nbsp; ├── /font-name<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; ├── font-name.tff<br />
                            &nbsp;| &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; └── font-name.woff<br />
                            &nbsp;| &nbsp;&nbsp; └── /style.css<br />
                            &nbsp;|<br />
                            &nbsp;└── /icon<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /icon-name<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── icon-name.png<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── icon-name.svg
                        </Typography__Code>
                    </div>
                </div>
            </Container__Section>

            <Container__Section>
                <div className='row'>
                    <div className='col col10'>
                        <Typography__Section_Title
                            text='Breaking down Assets'
                        />
                        <Typography__Body_Copy
                            text='You&#39;ll see below how we go about structuing our assets, however you may find it useful to include a global assets section to include things like a CSS reset, a grid system or a SASS includes file, for example.'
                        />

                        <Typography__Sub_Heading
                            text='Colour'
                        />
                        <Typography__Body_Copy
                            text='Defining colours into useful categories is a nice way to make sure colours have meaningful names based on usage and not the colour itself. Lets take a look at some examples:'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col6'>
                        <div className='spaced'>
                            <Typography__Code>
                                call-to-action.sass<br />
                                $button-primary: <span className='example-primary'>#009900</span>;<br />
                                $button-secondary: <span className='example-secondary'>#ff9900</span>;<br />
                                $text-link: <span className='example-link'>#ff0000</span>;
                            </Typography__Code>
                        </div>
                    </div>

                    <div className='col col6'>
                        <div className='spaced'>
                            <Typography__Code>
                                notification.sass<br />
                                $error: <span className='example-error'>#ff0000</span>;<br />
                                $success: <span className='example-success'>#009900</span>;<br />
                                $warning: <span className='example-warning'>#ff9900</span>;
                            </Typography__Code>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col col10'>
                        <Typography__Sub_Heading
                            text='Font'
                        />
                        <Typography__Body_Copy
                            text='Fonts are fairly self explanatory. Create a folder using the font name and add all the various font files within. These fonts can then be referenced in the style.css file in the fonts directory.'
                        />

                        <Typography__Sub_Heading
                            text='Icon'
                        />
                        <Typography__Body_Copy
                            text='Like Colours, Icons will be defined within meaningful category names based on usage. Let&#39;s take a look at some examples:'
                        />
                    </div>
                </div>

                <div className='row'>
                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Communication'
                        />
                        <ul className='list__bullet'>
                            <li>chat.svg</li>
                            <li>new-message.svg</li>
                            <li>reply.svg</li>
                            <li>send.svg</li>
                        </ul>
                    </div>

                    <div className='col col6'>
                        <Typography__Subtle_Title
                            text='Social'
                        />
                        <ul className='list__bullet'>
                            <li>amazon.svg</li>
                            <li>apple.svg</li>
                            <li>facebook.svg</li>
                            <li>google.svg</li>
                        </ul>
                    </div>
                </div>
            </Container__Section>

        </div>
    </Template__Bcd>

)


export default AssetPage
