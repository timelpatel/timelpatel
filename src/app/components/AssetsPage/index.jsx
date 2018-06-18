import React from 'react'
import {Link} from 'react-router-dom'


const AssetPage = () => (

    <div className='bcd'>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h3><Link to='/block-component-design'>BCD</Link></h3>

                    <h1>Assets</h1>
                    <p>Assets allow us to moderate a strict branding policy across our application, by only allowing pre-defined values. These rules can be enforced at Engineering level using test scripts, for example. Maybe Blocks do not accept hex colour values or font and icons can not be hardcoded into the styling file.</p>
                </div>
            </div>
        </div>

        <div className='container alt'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Folder structure</h2>
                    <p>Like our Components, Assets are stored in the root of the BCD folder. Some assets are then categorised, whilst others are put into the name of the asset.</p>
                    <p>Below is a sample folder structure for what you might expect to find.</p>

                    <p className='folder'>
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
                        &nbsp;└── /grid<br />
                        &nbsp;| &nbsp;&nbsp; └── /style.css<br />
                        &nbsp;|<br />
                        &nbsp;└── /icon<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /category-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── /icon-name<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├── icon-name.png<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └── icon-name.svg
                    </p>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='row'>
                <div className='col col10'>
                    <h2>Breaking down Assets</h2>

                    <h3>Colour</h3>
                    <p>Defining colours into useful categories is a nice way to make sure colours have meaningful names based on usage and not the colour itself. Lets take a look at some examples:</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col6'>
                    <p className='code'>call-to-action.css<br />
                        .button-primary: <span className='example-primary'>#009900</span><br />
                        .button-secondary: <span className='example-secondary'>#ff9900</span><br />
                        .text-link: <span className='example-link'>#ff0000</span>
                    </p>
                </div>

                <div className='col col6'>
                    <p className='code'>notification.css<br />
                        .error: <span className='example-error'>#ff0000</span><br />
                        .success: <span className='example-success'>#009900</span><br />
                        .warning: <span className='example-warning'>#ff9900</span>
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col col10'>
                    <h3>Font</h3>
                    <p>Fonts are fairly self explanatory. Create a folder using the font name and add all the various font files within. These fonts can then be referenced in the style.css file in the fonts directory.</p>

                    <h3>Grid</h3>
                    <p>Firstly, lets explain why grid is here and does not sit with our Elements. Although the grid system will usually be developed using CSS, it&#39;s usage is more asset-like. It may be used to create page-level layouts as well as within components. Once defined, it is not likely to be modified or versioned like we may wish with components.</p>

                    <h3>Icon</h3>
                    <p>Like Colours, Icons will be defined within meaningful category names based on usage. Let&#39;s take a look at some examples:</p>
                </div>
            </div>

            <div className='row'>
                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Communication</li>
                        <ul>
                            <li>chat.svg</li>
                            <li>new-message.svg</li>
                            <li>reply.svg</li>
                            <li>send.svg</li>
                        </ul>
                    </ul>
                </div>

                <div className='col col6'>
                    <ul className='list__bullet'>
                        <li>Social</li>
                        <ul>
                            <li>amazon.svg</li>
                            <li>apple.svg</li>
                            <li>facebook.svg</li>
                            <li>google.svg</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>

    </div>

)


export default AssetPage
